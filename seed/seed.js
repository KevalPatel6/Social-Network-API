const connection = require('../config/connection')
const {User, Thought} = require('../models')
const  { users, thoughts, reactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log('connected')

    //Delete users Collections if they exist//
    let userCheck = await connection.db.listCollections({name: 'users'}).toArray();
    
    if(userCheck.length){
        await connection.dropCollection('users');
    }

    //Insert Seed Data//
    await User.insertMany(users)

    let thoughtsCheck = await connection.db.listCollections({name: 'thoughts'}).toArray();

    if(thoughtsCheck.length){
        await connection.dropCollection('thoughts')
    }

    await Thought.insertMany(thoughts)

    console.table(users)
    console.table(thoughts)
    console.info('Seeding complete! 🌱')
    process.exit(0)
})