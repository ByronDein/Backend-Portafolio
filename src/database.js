require("dotenv").config();
const sequelize = require("sequelize");
const db = new sequelize(
   "reciclajedb",
    "root",
    "XD.byron123",
    {
        dialect: "mysql",
        host: process.env.DB_HOST || "localhost", 
    }
);
module.exports = db;
