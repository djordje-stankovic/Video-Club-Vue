var express = require('express');
var router = express.Router();


const User = require('./../models/User');

router.get('/users', function(req,res,next){
    User.findAll().then(users =>{
        res.json(users)
    }).catch(err =>{
        res.send('err' + err);
    })
})

router.post('/user',function(req,res,next){
    if(!req.body){
        res.status(400)
        res.json({
            error : "Bad Data"
        })
    }else{
        User.create(req.body)
        .then(data =>{
            res.send(data)
        })
        .catch(eroor =>{
            res.json('eroor' + eroor)
        })
    }
})
router.get('/user/:id', function(req,res,next){
    User.findOne({
        where: {
            id : req.params.id
        }
    }).then(user =>{
        if(user){
            res.json(user)
        }else{
            res.send("User with that Id dont exist")
        }
    }).catch(err =>{
        res.send(err)
    })
})

router.put('/user/:id', function(req,res,next){
    User.update(
        {active : true},
        {where: {
            id : req.params.id
        }}
    ).then(() =>{       
            res.json({status : "User activated"})      
    }).catch(err =>{
        res.send(err)
    })
})
router.post('/login',function(req,res,next){
    if(!req.body){
        res.status(400)
        res.json({
            error : "Bad Data"
        })
    }else{
        User.findAll({
            
            where: {
                username : req.body.username,
                password : req.body.password,
            }
        }).then(data =>{
            if(data.length !== 0){
                if(data.active === false){
                    console.log("user is not activated")
                    res.json({status : "fail"})
                }else{
                    res.json(data)
                }
            }else{
           res.json({status : "fail"})
            }
        }).catch(err =>{
            res.send(err)
        })
    }
})


module.exports = router