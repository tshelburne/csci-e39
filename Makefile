SHELL := $(SHELL) -e  # insure return codes within line continuations are honored
HOST_DIR := $(shell pwd)
DK_DIR := /usr/src/app

ENV_BACKEND := csci-e39.herokuapp.com
ENV_PORT := 3000
ENV_STUDENT_ID := $(or $(shell echo `cat .id`), id-not-set)

REPO := tshelburne/csci-e39
TAG := $(shell git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3)
IMAGE := $(REPO):$(TAG)

DK_MOUNT := -v $(HOST_DIR)/src:$(DK_DIR)/src -v $(HOST_DIR)/tmp:$(DK_DIR)/tmp -v $(HOST_DIR)/.id:$(DK_DIR)/.id -v $(HOST_DIR)/dev.sqlite3:$(DK_DIR)/dev.sqlite3
DK_ENV := -e PORT=$(ENV_PORT) -e STUDENT_ID=$(ENV_STUDENT_ID) -e DATABASE_URL=$(DATABASE_URL)
DK_PORTS := --expose $(ENV_PORT) -p $(ENV_PORT):$(ENV_PORT)
DK_DEBUG := -e DEBUG=knex:*,socket.io:*,csci-e39:*
DK_RUN := docker run $(DK_MOUNT) $(DK_ENV)

.DEFAULT_GOAL := list

all: clean migrate start

clean:
	rm -rf build node_modules public tmp dev.sqlite3

run:
	$(DK_RUN) $(IMAGE) $(command)

build:
	touch dev.sqlite3
	mkdir -p tmp/uploads
	docker build -t $(IMAGE) .

start: build
	$(DK_RUN) $(DK_PORTS) $(IMAGE)

stop:
	docker stop $(shell docker ps -qa --filter="ancestor=$(IMAGE)")

watch: build
	$(DK_RUN) $(DK_PORTS) $(DK_DEBUG) $(IMAGE) npm run watch

live: build
	$(DK_RUN) $(DK_PORTS) -e BACKEND=$(ENV_BACKEND) $(IMAGE)

migration: build
	$(DK_RUN) $(IMAGE) npm run migration -- $(name)

migrate: build
	$(DK_RUN) $(IMAGE) npm run migrate
	$(DK_RUN) $(IMAGE) npx knex seed:run

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
