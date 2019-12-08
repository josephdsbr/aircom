require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: '192.168.99.102',
  username: process.env.DB_USER,
  password: 'docker',
  database: 'aircom',
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
