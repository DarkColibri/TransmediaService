/** *****************************
 * Configuración del servidor.  *
 ****************************** */
const debug = require("debug")("web:src:api:server.js");
debug("INICIO");

const express = require("express");
const morgan = require('morgan');
//
const moment = require('moment');
require("console-stamp")(console, {pattern: "dd/mm/yyyy HH:MM:ss.l"});
// 
const listEndpoints = require('express-list-endpoints');
const history = require('connect-history-api-fallback');
const env = process.env.NODE_ENV || 'development';
const pjson = require('../../package.json');

class Server {
  constructor({ config, router }) {
    // Configs
    this._config = config;
    console.log(`Configuration [${pjson.version}][${moment().format('MMMM Do YYYY, h:mm:ss a')}][${env}] --> ${  JSON.stringify(this._config)}`);

    // Load EXPRESS
    this._express = express();
    this._express.use(morgan('dev'));
    // Global variables
    this._express.use((req, res, next) => {
      // app.locals.message = req.flash('message');
      // app.locals.success = req.flash('success');
      // app.locals.user = req.user;
      next();
    });
    // Load ROUTER
    this._express.use(router);
    this._express.use(history());

    // Show End Points
    console.log(listEndpoints(this._express));

  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        // console.log("Application running on port " + port);
        resolve();
      });
    });
  }
}

module.exports = Server;