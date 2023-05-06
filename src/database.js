
const mongoose = require('mongoose');
// Reemplaza estos valores con los tuyos
const URI = "mongodb://GymDesarrollo:Gym.Desarrollo.Ivaras@127.0.0.1:27017/?";
const dbName = 'pruebaDesarrollo';
const collectionName = 'alumnos';
const fieldName = 'correo';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName,
})

const connection = mongoose.connection;

connection.on('error', err => console.log(err));
connection.once('open', async () => {
    console.log('DB is connected');

    const collection = connection.collection(collectionName);
    const cursor = collection.find();

    for await (const doc of cursor) {
        await collection.updateOne(
            { _id: doc._id },
            { $set: { [fieldName]: doc[fieldName].toLowerCase() } }
        );
    }
});


// const URI = "mongodb://GymDesarrollo:Gym.Desarrollo.Ivaras@127.0.0.1:27017/?";

// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'pruebaDesarrollo',
// })

// const connection = mongoose.connection;

// connection.on('error', err => console.log(err));
// connection.once('open', () =>{
//     console.log('DB is connected')
    

// })
