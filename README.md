# Design Patterns in React (CSCI E-39)

## Accounts and Tools

1. [Github](https://github.com/) account
1. [NPM / Node (v10.*)](https://www.npmjs.com/get-npm)

## Installation

1. Open Terminal / git-bash and run
    1. `mkdir -p ~/Projects && cd ~/Projects`
    1. `git clone git@github.com:your_github_username_here/csci-e39.git && cd csci-e39`, replacing "your_github_username_here" with your Github username
    1. `echo your-id-goes-here > .id`, replacing "your-id-goes-here" with your student ID
    1. `npm install`
    1. `npm run build && npm run db`

## Repo documentation

See the [Docs](./docs) directory.

## Automated tasks

To see all tasks, see the package.json file, under "scripts".

### Application

1. `npm start` starts the app and connects to a local environment
1. `npm run start:prod` starts the app and connects to the live environment

### Development

1. `npm run clean` resets the directory to a fresh installation

### Working on Project 1
1. Open the src/ui/app.js file and update the path to the correct assignment module, which in this case is project-1

    For example, to enable Project 1, change `import Module from '../assignments/module-0'` to
    `import Module from '../assignments/project-1'`

1. `npm start` starts the app and connects to a local environment - if you connect to the prod environment using the other instructions above, it won't work and you'll be uploading your stuff into the cloud for all to see. Connect to the local environment and use `npm start` with Project 1 exclusively.
1. Work on your project, make regular and meaningful commits.
1. When your project is complete, submit a pull request.

### DevOps

1. `npm run migration -- [migration name]` creates a new database migration file
1. `npm run db.migrate` updates the local database schema
1. `npm run web:publish` publishes the current container to Dockerhub
1. `npm run web:deploy` deploys the current container to Heroku
1. `npm run web:migrate` updates the live Heroku database schema
