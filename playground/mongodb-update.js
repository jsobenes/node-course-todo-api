// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No puedo conectar al server de BD');
  }
  console.log('Conectado con exito a la BD.');
  
  db.collection('User').findOneAndUpdate({
    _id: new ObjectID('59d92cacf93044085a13663e')
  },{
    $set:{
      name: 'Jorge'
    },
    $inc:{
      age: 1
    }
  },{
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })

  //db.close();
});