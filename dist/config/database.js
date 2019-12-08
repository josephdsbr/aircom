"use strict";require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: '157.245.212.211',
  username: 'postgres',
  password: 'docker',
  database: 'aircom',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
