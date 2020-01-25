'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id:{
        type : Sequelize.INTEGER(11),
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
    },
    title: Sequelize.STRING(300),
    overview: Sequelize.STRING(1000),
    budget: Sequelize.STRING(300),
    genres: Sequelize.STRING(300),
    runtime : Sequelize.STRING(300),
    poster_path: Sequelize.STRING(300),
    vote_average: Sequelize.STRING(300),
    adult: Sequelize.BOOLEAN,
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};