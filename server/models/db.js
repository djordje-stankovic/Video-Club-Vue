const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = {}
const operatorsAliases = {
    $like: Op.like,
    $not: Op.not,
    $contains : Op.contains
  }
const sequelize = new Sequelize("movies", 'root', 'zekapeka93',{host : 'localhost', dialect : "mysql", operatorsAliases : operatorsAliases,define: {
    timestamps: false
}});



db.sequelize = sequelize;
db.Sequelize = Sequelize


module.exports = db;


