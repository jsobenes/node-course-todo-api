var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Hacer el Almuerzo',
  completed: false,
  completedAt: 1230,
});

newTodo.save().then((doc) => {
  console.log('Creamos la tarea', doc);
},(err) => {
  console.log('No pudimos crear la tarea');
});