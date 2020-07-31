# {{cookiecutter.project_name}}

![CI](https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.project_slug}}/workflows/CI/badge.svg?branch=master)

{{cookiecutter.project_description}}

## Run locally

1. Use the supported version (I only tested this on node 12).

        nvm use 12

1. Install packages

        npm install

1. Open two terminal windows

    Run the following in one window. This uses `nodemon` to watch the Typescript files being changed.

        npm run dev

    Run the following in another window. Runs webpack to watch and bundle your code.

        npm run webpack

1. Run lint and tests

        npm run lint
        npm run test

## Run with Docker

Use docker-compose:

        docker-compose up

## Configuration for render.com deployment

### package.json

Build and run commands used for Render deployment (see the [Dockerfile.prod](Dockerfile.prod) and [render.yaml](render.yaml) file):

    npm run build
    npm start
