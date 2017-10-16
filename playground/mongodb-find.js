// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59e4e4d05d1a2e1244b78a6e')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to find todos: ', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to count todos: ', err);
  // });
  db.collection('Users').find({name: 'Jon'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find users: ', err);
  });

  db.collection('Users').find({name: 'Jon'}).count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to count todos: ', err);
  });

  // db.close();
});
