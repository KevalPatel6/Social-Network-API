const connection = require('../config/connection')
const {User} = require('../models')
const userData = require('./data.json')

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log('connected')
    //Delete users Collections if they exist//
    let userCheck = await connection.db.listCollections({name: 'users'}).toArray();
    
    if(userCheck.length){
        await connection.dropCollection('users');
    }
    
    const users = userData

    //Insert Seed Data//
    await User.insertMany(users)
    
    console.table(users)
    console.info('Seeding complete! 🌱')
    process.exit(0)
})