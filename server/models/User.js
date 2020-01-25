const Sequelize = require('sequelize');

const db = require('./db');




module.exports = db.sequelize.define("Users", {
    id:{
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
    },
    username: Sequelize.STRING(300),
    email: Sequelize.STRING(300),
    password: Sequelize.STRING(300),
    active: {
        type : Sequelize.BOOLEAN,
        defaultValue: false,
    },
})