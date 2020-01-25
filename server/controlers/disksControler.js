var express = require('express')
var router = express.Router();


const Movie = require('./../models/Movie');
const User = require('./../models/User');
const Disks = require('./../models/Disk');

Disks.belongsTo(User, { as : "User", foreignKey : "userId"});
Disks.belongsTo(Movie, { as : "Movi", foreignKey : "movieId"});


router.post('/disk',function(req,res,next){
    if(!req.body){
        res.status(400)
        res.json({
            error : "Bad Data"
        })
    }else{
        Disks.create(req.body)
        .then(data =>{
            res.send(data)
        })
        .catch(eroor =>{
            res.json('eroor' + eroor)
        })
    }
})
router.get('/getFree', function(req,res,next){
    Disks.findAll({
        where : {
            userId : null
        }
    }
        
    ).then(data =>{
        res.json(data)
    }).catch(err =>{
        res.send('err' + err);
    })
})
router.get('/disk', function(req,res,next){
    Disks.findAll(
        
    ).then(data =>{
        res.json(data)
    }).catch(err =>{
        res.send('err' + err);
    })
})

router.put('/returnCd/:id', function(req,res,next){
    Disks.update(
        {userId : null},
        {where: {
            id : req.params.id
        }}
    ).then(() =>{       
            res.json({status : "User activated"})      
    }).catch(err =>{
        res.send(err)
    })
})

router.get('/disk/:id', function(req,res,next){
    Disks.findOne({
        where: {
            id : req.params.id
        },
        
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


router.get('/diskUser/:id', function(req,res,next){
    Disks.findAll(
        {
            where: {
                userId : req.params.id
            },
            include:[{all:true}]
        }
    ).then(data =>{
        res.json(data)
    }).catch(err =>{
        res.send('err' + err);
    })
})


module.exports = router