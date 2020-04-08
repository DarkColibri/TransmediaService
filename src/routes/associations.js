const debug = require("debug")("web:routes:associations");
//
const express = require('express');
const router = express.Router();
const moment = require("moment");
const axios = require("axios");
const db = require('../models');

debug('**    CARGAMOS   **');
//  --------------------------------------------------
//  GET http://localhost:8080/api/associations
router.get('/', (req, res) => {
  axios.get('http://localhost:8081/associations')
  .then(result => {
    debug('[RESPUESTA]' + JSON.stringify(result.data))
    res.json(result.data)
  })
  .catch(err => {
    debug(err)
    res.status(400).send(err);
  })
});
//  --------------------------------------------------
//  GET http://localhost:8080/api/associations/2
router.get('/:id', (req, res) => {
  axios.get('http://localhost:8081/associations/' + req.params.id)
  .then(result => {
    debug('[RESPUESTA]' + JSON.stringify(result.data))
    res.json(result.data)
  })
  .catch(err => {
    debug(err)
    res.status(400).send(err);
  })
});
//  --------------------------------------------------
//  POST http://localhost:8080/api/associations
//
//  curl -d '{"name":"Asociacion 4", "direction":"Direccion 4"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/associations  
router.post('/', (req, res) => {
  debug('>>>>>>> [ENTRAMOS] en el POST')
  debug(req.body.name + ' - ' + req.body.direction)
  debug('==========================================================================')

  axios.post('http://localhost:8081/_associations/', {
    name: req.body.name,
    direction: req.body.direction
  })
  .then(result => {
    debug('#####################################')
    debug('[RESPUESTA]' + JSON.stringify(result.data))
    res.json(result.data);
  })
  .catch(err => {
    debug('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    const estring = err;
    // debug(estring)
    debug('------------------------------------')
    // res.status(400).send(err);
    res.send(err);
  })
  // res.send('POST OK')
});
//  --------------------------------------------------
//  PUT http://localhost:8080/tasks/
//
//  curl -d '{"title":"Título 1", "description":"Descripción 111"}' -H "Content-Type: application/json" -X PUT http://localhost:8080/tasks/1 
router.put('/:id', (req, res) => {
  db.tasks.update({
      title: req.body.title,
      description: req.body.description
  }, {
      where: {
        id: req.params.id
      }
  })
  .then(result => {
      res.json(result);
  })
  .catch(err => {
      res.status(400).send(err);
  })
});
//  --------------------------------------------------
//  DELETE http://localhost:8080/tasks/
//
//  curl -X DELETE http://localhost:8080/tasks/1 
router.delete('/:id',(req, res) => {
  db.tasks.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(result => {
      res.json(result);
  })
  .catch(err => {
      res.status(400).send(err);
  })
});

module.exports = router;
