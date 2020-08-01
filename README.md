# Cookiecutter for Express and React Server-side Rendering

![CI](https://github.com/ardydedase/node-react-ssr/workflows/CI/badge.svg?branch=master)

An opinionated cookiecutter template that will help you to quickly set-up a starter code for building your server-side rendered Express with React web application.
The web app produced uses React server-side rendered with Express written in Typescript. This template is the basis of my personal projects.

## Specs

- Starter code in Typescript.
- Tested on:
    - npm >=6
    - node >=12

## What's included
- Use Express and React.js
- Uses webpack and babel for bundling and transpiling.
- Go live with a Continuous Deployment Pipeline using GitHub and Render's Infrastructure as Code. A sample IaC file can be found here.
- Express Node.js web framework.
- `node-config` to load configuration files.
- Jest for testing.


## What's NOT included
- Custom CSS setup. Relies on bootstrap.

## Cookiecutter customisable values
- GitHub username.
- Project / service name deployed to Render.
- Google Analytics ID for tracking (optional).

## Usage
1. Install cookiecutter

        pip install

1. Cookiecut the template

        cookiecutter git@github.com:ardydedase/cookiecutter-express-react-ssr.git

1. Enter the values accordingly. Take note of your project name. The project slug will be generated from the project name.
1. Change the working directory to the generated folder, same name as the project slug.

        cd <project_slug>

1. While you're in the directory, take a look at what's in the folder.

        ls -al

## Pre-requisites

- npm >=6
- node >=12

## Run locally

Step by step:

1. Use the supported version (I only tested this on node 12).

        nvm use 12

1. Install packages

        npm install

1. Open two terminal windows

    Run the following in one window. This uses `nodemon` to watch the Typescript files being changed.

        npm run dev

    Run the following in another window. Runs webpack to watch and bundle your code.

        npm run webpack

## Configuration for render.com deployment

### package.json

During deployment to Render, [package-render.json](package-render.json) file is used.
There is a command: `mv package-render.json package.json` replace the existing [package.json](package.json) file.
Render build and deploy steps only use the packages under `dependencies` and skips the `devDependencies`.

Build and run commands used for Render deployment (see the render.yaml file):

    npm run build
    npm start


## TODO

- [x] Process manager for running on production.
- [x] Revisit error handling.


## References

- React Server-side rendering: https://medium.com/@danlegion/react-server-side-rendering-with-express-b6faf56ce22
- Node Configuration: https://github.com/lorenwest/node-config
- Using Jest: https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40
- [Production best practices: performance and reliability](https://expressjs.com/en/advanced/best-practice-performance.html)
