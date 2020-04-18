const debug = require("debug")("web:index");
// PEQUEÑA PRUEBA
const express = require('express');
const morgan = require('morgan');
//
const moment = require('moment');
const listEndpoints = require('express-list-endpoints');

const history = require('connect-history-api-fallback');

// BASE DE DATOS
debug('CARGA MODELOS');
const db = require("./models");
debug('**********   MODELOS CARGADOS *********');
// APIs 
const apiTasks = require('./api/tasks');
const apiAssociations = require('./api/associations');
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
const port = 8080
app.set('port', process.env.PORT || port);

//Middlewere 
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', apiTasks);
app.use('/api/associations', apiAssociations);
app.use(history());

// Static files
app.use(express.static(__dirname + '/public'));

console.log(listEndpoints(app));
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
