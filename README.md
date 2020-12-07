# Spring action cleaning
A full stack PERN (PostgreSQL, Express, React, Node) project that aims to ease the tracking and recording of workers' hours.

## Prerequisites
- [Node] (10+)
- [PostgreSQL](https://www.postgresql.org/download/)
- Terminal access
- Web browser

## Features

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 - [x] Full stack ES8+ with [Babel]
 - [x] [Node] LTS support (verified working on 10.x, 12.x and 14.x LTS releases)
 - [x] [Express] server
 - [x] [React] client with [Webpack]
 - [x] Linting with [ESLint]
 - [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
 - [x] Production build (single deployment artifact, React loaded via CDN)
 - [x] [Heroku Postgres] database
 - [x] [Heroku] deployment
 - [x] [Cloud Foundry] deployment
 - [x] [Docker] build

## Setup to run locally
- Fork and clone this repository
- Install packages by running `npm install` in the project's root directory from your terminal.
- Create `.env` file and populate with your own values. Check `.env.example` for variables/format used.
``` bash
DB_NAME=spring # your database name
DB_PASSWORD=1234 # your database password
```
- Various scripts are provided in the package file, but many are helpers for other scripts; here are the most needed ones:
  - `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and the frontend is proxied to it).
  - `lint`: runs ESLint against all the JavaScript in the project.
  - `serve`: builds and starts the app in production mode locally.

## Notes

- CSP (content security policy) is turned off by default.
``` javascript
helmet({
		contentSecurityPolicy: false
	})
```

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Troubleshooting

See the guidance in the [wiki].

  [Babel]: https://babeljs.io/
  [Cloud Foundry]: https://www.cloudfoundry.org/
  [collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
  [Docker]: https://www.docker.com
  [ESLint]: https://eslint.org/
  [Express]: https://expressjs.com/
  [Express router]: https://expressjs.com/en/guide/routing.html#express-router
  [Heroku]: https://www.heroku.com/
  [Heroku Postgres]: https://www.heroku.com/postgres
  [Node]: https://nodejs.org/en/
  [pull request]: https://help.github.com/en/articles/about-pull-requests
  [React]: https://reactjs.org/
  [Webpack]: https://webpack.js.org/
  [wiki]: https://github.com/textbook/starter-kit/wiki
