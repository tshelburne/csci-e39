# ensure return codes within line continuations are honored
SHELL := $(SHELL) -e

HOST_DIR := $(shell pwd)
DK_DIR := /usr/src/app

ENV_BACKEND := csci-e39.herokuapp.com
ENV_PORT := 3000
ENV_STUDENT_ID := $(or $(shell echo `cat .id`), id-not-set)

REPO := tshelburne/csci-e39
TAG := $(shell git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3)
IMAGE := $(REPO):$(TAG)

define mount
	-v $(HOST_DIR)/$(1):$(DK_DIR)/$(1)
endef

DK_MOUNT_DEBUG := $(call mount,build) $(call mount,public)
DK_MOUNT := $(call mount,src) $(call mount,.id) $(call mount,dev.sqlite3) $(call mount,package.json) $(call mount,package-lock.json)
DK_ENV := -e PORT=$(ENV_PORT) -e STUDENT_ID=$(ENV_STUDENT_ID) -e DATABASE_URL=$(DATABASE_URL)
DK_PORTS := --expose $(ENV_PORT) -p $(ENV_PORT):$(ENV_PORT) --expose 35729 -p 35729:35729
DK_DEBUG := -e DEBUG=knex:*,socket.io:*,csci-e39:*

.DEFAULT_GOAL := list

all: clean migrate start

clean: stop
	rm -rf build node_modules public dev.sqlite3
	docker rmi -f $(shell docker images -qa $(REPO))

build:
	touch dev.sqlite3
	docker build -t $(IMAGE) .

run: build
	docker run $(DK_MOUNT) $(DK_ENV) $(args) $(IMAGE) $(command)

shell: build
	@make run args='-it' command='sh'

activate: build
	@make run command='sed -i -e "s/assignments\/.*\//assignments\/$(assignment)\//g" src/ui/app.jsx.js src/ui/index.pug'

start: build
	@make run args='$(DK_PORTS)'

stop:
	docker stop $(shell docker ps -qa --filter="ancestor=$(IMAGE)")

watch: build
	@make run args='$(DK_PORTS) $(DK_DEBUG)' command='npm run watch'

live: build
	@make run args='$(DK_PORTS) -e BACKEND=$(ENV_BACKEND)'

migration: build
	@make run command='npm run migration -- $(name)'

migrate: build
	@make run command='npm run migrate'
	@make run command='npx knex seed:run'

publish: build
	docker push $(IMAGE)

deploy:
	heroku container:push web

migrate-prod:
	heroku run npm run migrate

list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null \
		| awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' \
		| sort \
		| egrep -v -e '^[^[:alnum:]]' -e '^$@$$' \
		| xargs

.PHONY: all clean run build start watch list
