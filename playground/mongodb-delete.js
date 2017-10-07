// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No puedo conectar al server de BD');
  }
  console.log('Conectado con exito a la BD.');
  
  //deleteMany
  db.collection('User').deleteMany({name: 'Jorge'}).then((res) => {
    console.log(res);
  });

  //findOneAndDelete
  _id = new ObjectID('59d92cdde478d7085bc1b014');
  db.collection('User').findOneAndDelete({_id: _id}).then((res) => {
    console.log(res);
  })

  //db.close();
});