const Sequelize = require('sequelize');

const db = require('./db');




module.exports = db.sequelize.define("Movies", {
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
})


// ,
// budget,
// genres,
// homepage,
// id,
// imdb_id,
// original_language,
// original_title,
// overview,
// popularity,
// poster_path,
// production_companies,
// production_countries,
// release_date,
// revenue,
// runtime,
// spoken_languages,
// status,
// tagline,
// title,
// video,
// vote_average,
// vote_count