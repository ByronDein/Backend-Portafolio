// import module/package
const usuarios = require("./routes/usuarios");
const ticket = require("./routes/tickets");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const db = require("./database");
// setting port
app.set("port", process.env.PORT || 3000);
// setting database
(async () => {
    try {
        await db.sync();
        console.log("database sync");
        await db.authenticate()
            .then(() => console.log("database connected", ))
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
})();
    

// setting middleware
app.use(cors());
app.use(express.json());
app.use("/usuarios",usuarios);
app.use("/tickets",ticket);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// setting error path
app.use((req, res, next) => {
    const err = new Error(`${req.url} not found in this server`);
    err.status = 404;
    next(err);
});
// setting another error program
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});
// export app
module.exports = app;






// const express = require('express');
// const cors = require('cors');
// const app = express();
// //settings
// app.set('port', process.env.PORT || 4000)

// // middlewares
// app.use(cors({
//     origin: 'https://caf-desarrollo.ivaras.cl',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }));
// // app.use(function(req, res, next) {
// //     res.header("Access-Control-Allow-Origin", "*");
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     next();
// // });
// app.use(express.json());

// //routes
// app.use('/api/alumnos', require('./routes/alumnos'))
// app.use('/api/usuarios', require('./routes/usuarios'))
// app.use('/api/sesiones', require('./routes/sesiones'))
// app.use('/api/reservas', require('./routes/reservas'))
// app.use('/api/send-email', require('./sendgrid.js'))
// app.use('/api/metricas', require('./routes/metricas'))

// module.exports = app