const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.reciclajedb);

module.exports = { sequelize };
