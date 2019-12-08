require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: '192.168.99.102',
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
