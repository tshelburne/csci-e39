#!/bin/bash

set -e

HOST_DIR=`pwd`
DK_DIR=/usr/src/app

ENV_BACKEND=csci-e39.herokuapp.com
ENV_STUDENT_ID=`cat .id`

function all() {
	clean
	migrate
	start
}

function clean() {
	stop
	rm -rf build node_modules public dev.sqlite3
}

function build() {
	touch dev.sqlite3
	npm install
}

function activate() {
	local ASSIGNMENT=$1
	build

	sed -i -e "s/assignments\/.*\//assignments\/$(assignment)\//g" src/ui/app.jsx.js
	sed -i -e "s/css\/.*\//css\/$(assignment)\//g" src/ui/index.pug
}

function start() {
	build
	STUDENT_ID=$ENV_STUDENT_ID npm start
}

function watch() {
	build
	STUDENT_ID=$ENV_STUDENT_ID npm run watch
}

function live() {
	build
	BACKEND=$ENV_BACKEND STUDENT_ID=$ENV_STUDENT_ID npm start
}

function migrate() {
	build
	npm run migrate
	npx knex seed:run
}

CMD=$1; shift
case $CMD in
	'test_docker') _docker -v;;
	'all') all;;
	'clean') clean;;
	'build') build;;
	'activate')
		ASSIGNMENT=$1
		activate $ASSIGNMENT;;
	'start') start;;
	'watch') watch;;
	'live') live;;
	'migrate') migrate;;
esac
