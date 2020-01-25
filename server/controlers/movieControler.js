var express = require('express')
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const Movie = require('./../models/Movie');
const Disks = require('./../models/Disk');


router.post('/movie',function(req,res,next){
    if(!req.body){
        res.status(400)
        res.json({
            error : "Bad Data"
        })
    }else{
        Movie.create(req.body)
        .then(data =>{
            res.send(data)
        })
        .catch(eroor =>{
            res.json('eroor' + eroor)
        })
    }
})

router.post('/search', function(req,res,next){
    Movie.findAll(
        {
            where: {
              title: {
                [Op.like]: `%${req.body.serch}%`
              }
            }
        }
    ).then(movies =>{
        res.json(movies)
    }).catch(err =>{
        res.send('err' + err);
    })
})
router.get('/movie', function(req,res,next){
    Movie.findAll().then(movies =>{
        res.json(movies)
    }).catch(err =>{
        res.send('err' + err);
    })
})
router.get('/movie/:id', function(req,res,next){
    Movie.findOne({
        where: {
            id : req.params.id
        }
    }).then(movie =>{
        if(movie){
            res.json(movie)
        }else{
            res.send("Movie with that Id dont exist")
        }
    }).catch(err =>{
        res.send(err)
    })
})

router.post('/recomanded', function(req,res,){
    Movie.findAll({
        where: {
            genres: {
              [Op.like]: `%${req.body.genre}%`
            }
          }
    }).then(movie =>{
        if(movie){
            res.json(movie)
        }else{
            res.send("Movie with that Id dont exist")
        }
    }).catch(err =>{
        res.send(err)
    })
    
})

// router.put('/movie/:id', function(req,res,next){
//     User.update(
//         {active : true},
//         {where: {
//             id : req.params.id
//         }}
//     ).then(() =>{       
//             res.json({status : "User activated"})      
//     }).catch(err =>{
//         res.send(err)
//     })
// })
// router.post('/login',function(req,res,next){
//     if(!req.body){
//         res.status(400)
//         res.json({
//             error : "Bad Data"
//         })
//     }else{
//         User.findAll({
            
//             where: {
//                 username : req.body.username,
//                 password : req.body.password,
//             }
//         }).then(data =>{
//             if(data.length !== 0){
//                 if(data.active === false){
//                     console.log("user is not activated")
//                     res.json({status : "fail"})
//                 }else{
//                     res.json(data)
//                 }
//             }else{
//            res.json({status : "fail"})
//             }
//         }).catch(err =>{
//             res.send(err)
//         })
//     }
// })


module.exports = router