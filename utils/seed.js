const connection = require('../config/connection')
const {User} = require('../models')
const userData = require('./data')

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log('connected')
    
    //Delete users Collections if they exist//
    let userCheck = await connection.db.listCollections({name: 'users'}).toArray();
    
    if(userCheck.length){
        await connection.dropCollection('users');
    }
    
    //Insert Seed Data//
    let insertUserData = await User.insertMany(userData)
    
})