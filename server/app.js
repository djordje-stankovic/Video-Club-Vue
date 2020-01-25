const express = require('express');

var bodyParser = require('body-parser');
var user = require('./controlers/userControler');
var movie = require('./controlers/movieControler');
var cors = require('cors');
var mailControler = require('./controlers/mailControler');
var disk = require('./controlers/disksControler');


const app = express();
const path = require('path');


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../pooly/build')));

//Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*",);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});
app.post('/mail', mailControler.SendMail);




app.use('/', user)
app.use('/', disk)
app.use('/', movie)




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App runing on port${port} from app`);
});