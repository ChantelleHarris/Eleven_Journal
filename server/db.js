const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Diosa1989@localhost:5432/eleven-journal");

module.exports = sequelize;