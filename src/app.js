// import module/package
const usuario = require("./routes/usuarios");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
// setting middleware
app.use( usuario);
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