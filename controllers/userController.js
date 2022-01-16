const user = require('../models/user');

async function addUser(req, res){
    try {
      const user = await user.create(req.body);
      res.status(200).json({message: 'User has been created'})  
    } catch (error) {
        console.log('cant add data', error.message);
        res.status(401).json({error: error.message});
    }
}

async function getAllUsers(req, res){
    try {
       const users = await user.find();
       res.status(200).json({
           users: [ 
           {first_name: '', last_name: '', school: ''}, 
           {first_name: '', last_name: '', school: ''}, 
           {first_name: '', last_name: '', school: ''} 
        ]
    });
    } catch (error) {
        console.log('cant get data:', error.message);
        res.status(401).json({error: error.message});
    }
}

module.exports = {addUser, getAllUsers}