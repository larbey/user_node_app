const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const PORT = process.env.PORT || 4000;
//const user = require('./models/user');

app.use(express.json());
app.get('/users', userController.getAllUsers);
app.post('/users', userController.addUser);

app.listen(4000, function(){
    console.log('Server has started to run');
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('DB is not connected', error.message);
    })
});


//DB_URL : for your atlas version
//LOCAL_DB : for your local version