const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '598a49f25a4b403598a22909'}).then((todo) => {
//     console.log(todo);
// }); 



Todo.findByIdAndRemove('598a49f25a4b403598a22909').then((todo) => {
    console.log(todo);
});