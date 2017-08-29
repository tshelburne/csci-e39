SHELL := $(SHELL) -e  # insure return codes within line continuations are honored

ENV_BACKEND := csci-e39.herokuapp.com
ENV_PORT := 3000
ENV_STUDENT_ID := $(or $(shell echo `cat .id`), id-not-set)

REPO := tshelburne/csci-e39
TAG := $(shell git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3)
IMAGE := $(REPO):$(TAG)

MOUNT := $(shell pwd)/src:/usr/src/app/src
ENV := -e PORT=$(ENV_PORT) -e STUDENT_ID=$(ENV_STUDENT_ID) -e DB_HOST=$(DB_HOST) -e DB_USER=$(DB_USER) -e DB_PASS=$(DB_PASS) -e DB_DATA=$(DB_DATA)
RUN := docker run $(ENV) --expose $(ENV_PORT) -p $(ENV_PORT):$(ENV_PORT)

.DEFAULT_GOAL := list

all: clean image start

clean:
	rm -rf build node_modules public

run:
	echo $(RUN) $(IMAGE) [command]

image:
	docker build -t $(IMAGE) .

start: image
	$(RUN) $(IMAGE)

stop:
	docker stop $(shell docker ps -qa --filter="ancestor=$(IMAGE)")

watch: image
	$(RUN) -v $(MOUNT) $(IMAGE) npm run watch

live: image
	$(RUN) -e BACKEND=$(ENV_BACKEND) $(IMAGE)

publish: image
	docker push $(IMAGE)

deploy:
	heroku container:push web

list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | xargs

.PHONY: all clean run image start watch list
