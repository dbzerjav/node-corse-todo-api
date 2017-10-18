const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userID = '59e51bd2f4d7322db848d953'
// var id = '59e6e1426b1f6f307c05d4f1';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => console.log(e));
User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User Id not found');
  }
  console.log('User by id', user)
}).catch((e) => console.log(e));
