const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

Todo.findOneAndRemove().then((res) => {

});

Todo.findByIdAndRemove('59e790bf654a8428080adbd5').then((todo) => {
  console.log(todo);
});
