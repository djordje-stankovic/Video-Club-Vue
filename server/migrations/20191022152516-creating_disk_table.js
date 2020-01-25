'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Disks', {
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
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Disks');
  }
};