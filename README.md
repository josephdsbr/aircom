<h1 align="center">Welcome to AirCom 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

# Jest Testing

<div class='wrapper'>
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file medium" data-value="controllers"><a href="controllers/index.html">controllers</a></td>
	<td data-value="74.83" class="pic medium"><div class="chart"><div class="cover-fill" style="width: 74%;"></div><div class="cover-empty" style="width:26%;"></div></div></td>
	<td data-value="74.83" class="pct medium">74.83%</td>
	<td data-value="147" class="abs medium">110/147</td>
	<td data-value="62.5" class="pct medium">62.5%</td>
	<td data-value="80" class="abs medium">50/80</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="21" class="abs high">21/21</td>
	<td data-value="89.41" class="pct high">89.41%</td>
	<td data-value="85" class="abs high">76/85</td>
	</tr>

<tr>
	<td class="file low" data-value="middlewares"><a href="middlewares/index.html">middlewares</a></td>
	<td data-value="47.06" class="pic low"><div class="chart"><div class="cover-fill" style="width: 47%;"></div><div class="cover-empty" style="width:53%;"></div></div></td>
	<td data-value="47.06" class="pct low">47.06%</td>
	<td data-value="17" class="abs low">8/17</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="6" class="abs medium">4/6</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="2" class="abs medium">1/2</td>
	<td data-value="33.33" class="pct low">33.33%</td>
	<td data-value="12" class="abs low">4/12</td>
	</tr>

<tr>
	<td class="file high" data-value="models"><a href="models/index.html">models</a></td>
	<td data-value="100" class="pic high"><div class="chart"><div class="cover-fill cover-full" style="width: 100%;"></div><div class="cover-empty" style="width:0%;"></div></div></td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="46" class="abs high">46/46</td>
	<td data-value="77.27" class="pct medium">77.27%</td>
	<td data-value="22" class="abs medium">17/22</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="16" class="abs high">16/16</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="33" class="abs high">33/33</td>
	</tr>

</tbody>
</table>
</div><div class='push'></div><!-- for sticky footer -->

## Description

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

## Inserting Data

> Before starting, please, run the script saved on ``lib/query-import-data.sql`` to insert some informations into database.
> The script was made in PostgreSQL, if you're going to use any other driver, then maybe you going to have to changing the script.
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
* LinkedIn: [@josephdsbr](https://linkedin.com/in/josephdsbr), [@rodrigonunes](https://www.linkedin.com/in/rodrigo-nunes-53ab5297/), [@joaopaulo](https://www.linkedin.com/in/joaopaulos4/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
