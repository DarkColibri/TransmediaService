const express = require('express')

const db = require('../../db/models')
const bodyParser = require('body-parser')
const cors = require('cors') // <<<<<< ¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?
const compression = require('compression')

const Repository = require('../repositoy/base.repository')
const repository = new Repository(db, 'threads')

const router = express.Router()

router
  .use(cors())
  .use(bodyParser.json())
  .use(compression())

router.get('/', (req, res) => {
  repository.findAll()
    .then(result => {
      console.log(JSON.stringify(result))
      res.json(result)
    })
    .catch(err => {
      res.json({ message: err })
    })
})

router.get('/:id', (req, res) => {
  console.log('ROUTER GET')
  const { id } = req.params
  // const id = req.params.id
  // console.log(req)
  // console.log('***********')
  repository.findOne(id)
    .then(result => {
      console.log(JSON.stringify(result))
      res.json(result)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

router.post('/', (req, res) => {
  const { body } = req
  console.log('BODY ' + JSON.stringify(body))
  repository.create(body)
    .then(result => {
      console.log('RESULT: ' + JSON.stringify(result))
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

router.put('/:id', (req, res) => {
  const { body } = req
  const { id } = req.params
  console.log('BODY ' + JSON.stringify(id, body))
  repository.update(id, body)
    .then(result => {
      console.log('RESULT: ' + JSON.stringify(result))
      res.status(201).json(result)
      // res.json(result)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  console.log('DELETE: ' + id)
  repository.delete(id)
    .then(result => {
      console.log('RESULT: ' + JSON.stringify(result))
      res.status(204).json(result)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

module.exports = router
