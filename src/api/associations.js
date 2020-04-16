const debug = require("debug")("web:routes:associations");
//
const express = require('express');
const router = express.Router();
const moment = require("moment");
const axios = require("axios");
const db = require('../models');

//  --------------------------------------------------
//  GET http://localhost:8080/api/associations
router.get('/', async (req, res) => {
  // debug(req);
  const result = await db.associations.findAll();
  console.log('<<<<< '+JSON.stringify( result));
  res.json(result);
  // axios.get('http://localhost:8081/associations')
  // .then(result => {
  //   debug('[RESPUESTA]' + JSON.stringify(result.data))
  //   res.json(result.data)
  // })
  // .catch(err => {
  //   debug(err)
  //   res.status(400).send(err);
  // })
});
//  --------------------------------------------------
//  GET http://localhost:8080/api/associations/2
router.get('/:id', (req, res) => {
  db.associations
  .findByPk(req.params.id)
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    console.log(err);
  })
  // axios.get('http://localhost:8081/associations/' + req.params.id)
  // .then(result => {
  //   debug('[RESPUESTA]' + JSON.stringify(result.data))
  //   res.json(result.data)
  // })
  // .catch(err => {
  //   debug(err)
  //   res.status(400).send(err);
  // })
});
//  --------------------------------------------------
//  POST http://localhost:8080/api/associations
//
//  curl -d '{"name":"Energy Control", "description":"Descripcion", "link":"https://energycontrol.org/"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/associations  
router.post('/', (req, res) => {
  db.associations
  .create({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link
})
.then(result => {
  res.json(result);
})
.catch(err => {
  res.status(400).send(err);
})
  // debug(req.body.name + ' - ' + req.body.direction)
 
  // axios.post('http://localhost:8081/_associations/', {
  //   name: req.body.name,
  //   direction: req.body.direction
  // })
  // .then(result => {
  //   debug('[RESPUESTA]' + JSON.stringify(result.data))
  //   res.json(result.data);
  // })
  // .catch(err => {
  //   const estring = err;
  //   // debug(estring)
  //   // res.status(400).send(err);
  //   res.send(err);
  // })
  // res.send('POST OK')
});
//  --------------------------------------------------
//  PUT http://localhost:8080/tasks/
//
//  curl -d '{"name":"Energy Control", "description":"Descripcion", "link":"https://energycontrol.org/"}' -H "Content-Type: application/json" -X PUT http://localhost:8080/tasks/1 
router.put('/:id', (req, res) => {
  db.associations.update({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link
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
  db.associations.destroy({
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
