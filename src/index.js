const debug = require("debug")("web:index");
// PEQUEÑA PRUEBA
const express = require('express');
const morgan = require('morgan');
const moment = require('moment');
const listEndpoints = require('express-list-endpoints');
// const history = require('connect-history-api-fallback');
// const apiAssociations = require('./api/associations');
const bodyParser = require("body-parser");
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const pjson = require('../package.json');

require("console-stamp")(console, {pattern: "dd/mm/yyyy HH:MM:ss.l"});
// console.log(`Conf [${pjson.version}][${moment().format('MMMM Do YYYY, h:mm:ss a')}][${env}] --> ${  JSON.stringify(config)}`);

// Initialize  Server
const app = express();

// Settings

// Port
const port = 8080
app.set('port', process.env.PORT || port);

//Middlewere 
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
// app.use(history());

// BASE DE DATOS ////////////////////////////////////////////
const db = require("./db/models");
// APIs ///////////////////////////////////////////////////
// const routesTask = require('./api/routes/task.routes');

// ROUTES ////////////////////////////////////////////////////////
app.use('/api/threads', require('./api/routes/threads.routes'))
app.use('/api/posts', require('./api/routes/posts.routes'))

// app.use('/api/associations', apiAssociations);
//////////////////////////////////////////////////////////////////
// Static files
// app.use(express.static(__dirname + '/public'));


// -----------------------------------------------------------------------------------------------------
console.log("if Sync Force true - Database will be reset")
db.sequelize.sync({
  force: false
}).then(() => {

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.info(`>> The script uses approximately ${Math.round(used * 100) / 100} MB`);
  console.info(listEndpoints(app));

  app.listen(app.get ('port'), () => {console.log('>> App listening on port', app.get('port'));});
  
}, error => {
  console.error(error); // Error!
  app.listen(app.get ('port'), () => { console.log('App listening on port', app.get('port'));});
});
