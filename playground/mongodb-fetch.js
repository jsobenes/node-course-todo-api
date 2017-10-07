// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No puedo conectar al server de BD');
  }
  console.log('Conectado con exito a la BD');
  
/*   db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('No pudimos hacer el Fetch a Todos', err);
  }); */

  db.collection('User').find({name: 'Jorge'}).count().then((count) => {
    console.log(`Encontramos ${count}`);
  },(err) => {
    console.log('No pudimos contar', err);
  });

  db.collection('User').find({name: 'Jorge'}).toArray().then((docs) => {
    console.log(docs);
  },(err) => {
    console.log('No pudimos contar', err);
  });

  //db.close();
});