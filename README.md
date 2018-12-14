# Design Patterns in React (CSCI E-39)

## Accounts and Tools

1. [Github](https://github.com/) account
1. [NPM / Node (v10.*)](https://www.npmjs.com/get-npm)

## Installation

1. Open Terminal / git-bash and run
    1. `mkdir -p ~/Projects && cd ~/Projects`
    1. `git clone git@github.com:tshelburne/csci-e39.git && cd csci-e39`
    1. `echo your-id-goes-here > .id`, replacing "your-id-goes-here" with your student ID
    1. `npm run build && npm run migrate`

## Repo documentation

See the [Docs](./docs) directory.

## Automated tasks

To see all tasks, run `make`

### Application

1. `make start` starts the app and connects to a local environment
1. `make live` starts the app and connects to the live environment
1. `make stop` stops any running version of the app (`start`, `watch`, `live`, etc.)

### Development

1. `make clean` resets the directory to a fresh installation
1. `make watch` starts the app, connects to a local environment, and recompiles when source code changes
1. `make activate assignment=[assignment name]` updates the app to enable the specific assignment directory

### DevOps

1. `make migration name=[migration name]` creates a new database migration file
1. `make migrate` updates the local database schema
1. `make publish` publishes the current container to Dockerhub
1. `make deploy` deploys the current container to Heroku
1. `make migrate-prod` updates the live Heroku database schema