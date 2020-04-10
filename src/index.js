const debug = require("debug")("web:index");
// PEQUEÑA PRUEBA
const express = require('express');
const morgan = require('morgan');
//
const moment = require('moment');
const listEndpoints = require('express-list-endpoints');

// BASE DE DATOS
const db = require("./models");
// APIs 
debug('CARGAMOS TASKS');
const apiTasks = require('./routes/tasks');
debug('CARGAMOS ASSOCIATIONS');
const apiAssociations = require('./routes/associations');
debug('TODO CARGADO');
const bodyParser = require("body-parser");

const app = express();
// 
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const pjson = require('../package.json');

require("console-stamp")(console, {pattern: "dd/mm/yyyy HH:MM:ss.l"});

console.log(`Configuration [${pjson.version}][${moment().format('MMMM Do YYYY, h:mm:ss a')}][${env}] --> ${  JSON.stringify(config)}`);

// Settings

// Port
debug('ASIGNAMOS PUERTO');
const port = 8080
app.set('port', process.env.PORT || port);

//Middlewere 
debug('CARGAMOS MIDDLEWERE');
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());

debug('CARGAMOS RUTAS');
// Routes
app.use('/api/tasks', apiTasks);
app.use('/api/associations', apiAssociations);

console.log(listEndpoints(app));

debug('CARGAMOS VUE (/public)');
// Static files
app.use(express.static(__dirname + '/public'));

// -----------------------------------------------------------------------------------------------------
console.log("if Sync Force true - Database will be reset")
db.sequelize.sync({
  force: false
}).then(() => {

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

  app.listen(app.get ('port'), () => {console.log('App listening on port', app.get('port'));});
  
}, error => {
  console.log(error); // Error!
  app.listen(app.get ('port'), () => { console.log('App listening on port', app.get('port'));});
});
