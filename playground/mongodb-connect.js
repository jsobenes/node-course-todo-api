/* const MongoClient = require('mongodb').MongoClient; */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No puedo conectar al server de BD');
  }
  console.log('Conectado con exito a la BD.');
  
/*   db.collection('Todos').insertOne({
    text: 'Comprar paltas',
    completed: false
  }, (err, res) => {
    if (err) {
      return console.log('No pudimos insertar', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  }) */

/*   db.collection('User').insertOne({
    name: 'Jorge',
    age: 39,
    location: 'Concon'
  },(err, res) => {
    if (err) {
      return console.log('No pudimos insertar', err);
    }
    console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  }) */

  db.close();
});