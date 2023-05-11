require("dotenv").config();
const sequelize = require("sequelize");
const db = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
    }
);
module.exports = db;
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
