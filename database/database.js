const Sequelize = require('sequelize');

const connection = new Sequelize('trabalho_script','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;