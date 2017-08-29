SHELL := $(SHELL) -e  # insure return codes within line continuations are honored
DIR := $(shell pwd)

ENV_BACKEND := csci-e39.herokuapp.com
ENV_PORT := 3000
ENV_STUDENT_ID := $(or $(shell echo `cat .id`), id-not-set)

REPO := tshelburne/csci-e39
TAG := $(shell git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3)
IMAGE := $(REPO):$(TAG)

MOUNT := -v $(DIR)/src:/usr/src/app/src -v $(DIR)/dev.sqlite3:/usr/src/app/dev.sqlite3
ENV := -e PORT=$(ENV_PORT) -e STUDENT_ID=$(ENV_STUDENT_ID) -e DATABASE_URL=$(DATABASE_URL)
PORTS := --expose $(ENV_PORT) -p $(ENV_PORT):$(ENV_PORT)
RUN := docker run $(MOUNT) $(ENV) $(PORTS)

.DEFAULT_GOAL := list

all: clean build start

clean:
	rm -rf build node_modules public dev.sqlite3

run:
	echo $(RUN) $(IMAGE) [command]

build:
	touch dev.sqlite3
	docker build -t $(IMAGE) .

start: build
	$(RUN) $(IMAGE)

stop:
	docker stop $(shell docker ps -qa --filter="ancestor=$(IMAGE)")

watch: build
	$(RUN) $(IMAGE) npm run watch

live: build
	$(RUN) -e BACKEND=$(ENV_BACKEND) $(IMAGE)

migration: build
	$(RUN) $(IMAGE) npm run migration -- $(name)

migrate: build
	$(RUN) $(IMAGE) npm run migrate

publish: build
	docker push $(IMAGE)

deploy:
	heroku container:push web

list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs

.PHONY: all clean run build start watch list
