// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
     return   console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server')

//     db.collection('Todos').find({
//         _id: new ObjectID('595f9120edb64dd53d530e33')
// }).toArray().then((docs) => {
//         console.log('Todo');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err)
//     });

//  db.collection('Todos').find().count().then((count) => {
//         console.log(`Todo count: ${count}`);
//     }, (err) => {
//         console.log('Unable to fetch todos', err)
//     });


 db.collection('Users').find({name:'Francis'}).count().then((count) => {
        console.log(`User with the name Francis count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });
db.collection('Users').find({name: 'Francis'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});

    // db.close();
});