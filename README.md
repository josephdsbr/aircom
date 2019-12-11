<h1 align="center">Welcome to AirCom 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Airport System to manage communication to clients about theirs flies.

## Install

> You have to install needed packages using ``npm install`` or ``yarn install``.

```sh
yarn install
```

## Database Configuration

> You gotta to set some database configuration in .env file. This project was developed using ```Postgres``` on a docker container. If you wish to use another sql manager you have to install its driver using ``yarn`` or ``npm``.
```sh
/* Secret to access Total Voice API*/
SECRET_KEY=2c5953ebefb2432da42a2bec8751ac33
 
NODE_ENV=development

APP_SECRET=aircom-hackaton

DB_DIALECT=postgres
DB_HOST= $database_host

DB_USER= $user
DB_PASS= $password
DB_NAME= $database_name
DB_PORT= $database_port

```

## Migrations

> After configurate your database you have to run sequelize migrations to create database structure.

```ssh
yarn sequelize db:migrate
```

## Usage

> Development server.

```ssh
yarn dev
```

> Production server.

```sh
yarn build && yarn start
```

## Run tests

```sh
yarn run test
```

## Author

👤 **José Vinícius, Rodrigo Nunes, João Paulo and Ana Vieira**

* Github: [@josephdsbr](https://github.com/josephdsbr), [@RodrigoNunesLeite](https://github.com/RodrigoNunesLeite), [@anacbvieira](https://github.com/anacbvieira)
* LinkedIn: [@josephdsbr](https://linkedin.com/in/josephdsbr), [@rodrigonunes](https://www.linkedin.com/in/rodrigo-nunes-53ab5297/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
