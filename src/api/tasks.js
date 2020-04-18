const debug = require("debug")("web:routes:tasks");
//
const express = require('express');
const router = express.Router();
const moment = require("moment");
const axios = require("axios");
const db = require('../db/models');

//  --------------------------------------------------
//  GET http://localhost:8080/api/tasks/
// router.get('/', (req, res) => {
//     db.tasks.findAll()
//     .then(result =>{ 
//         res.json(result);
//     })
//     .catch(err => {
//         res.status(400).send(err) // <<-------- !!!!!!!!!!!!!!!!
//     });
// });
router.get('/', async (req, res) => {
//   debug(req);
  const result = await db.tasks.findAll();
  console.log(JSON.stringify( result));
  res.json(result);
});

//  --------------------------------------------------
//  GET http://localhost:8080/api/tasks/2
router.get('/:id', (req, res) => {
  db.tasks
  .findByPk(req.params.id)
  .then(result => {
      res.json(result);
    })
  .catch(err => {
    console.log(err);
  })
});
//  --------------------------------------------------
//  POST http://localhost:8080/api/tasks/
//
//  curl -d '{"title":"Título 1", "description":"Descripción 2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/tasks  
router.post('/', (req, res) => {
  db.tasks.create({
      title: req.body.title,
      description: req.body.description
  })
  .then(result => {
      res.json(result);
  })
  .catch(err => {
      res.status(400).send(err);
  })
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
