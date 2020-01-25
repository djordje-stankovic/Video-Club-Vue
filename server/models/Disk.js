const Sequelize = require('sequelize');

const db = require('./db');




module.exports = db.sequelize.define("Disk", {
    id:{
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
    },
    userId:{
        type : Sequelize.INTEGER(11),
        allowNull : true
    },
    movieId:{
        type : Sequelize.INTEGER(11),
        allowNull : false
    },
    publish: {
        type : Sequelize.BOOLEAN,
        defaultValue: false,
    },
})