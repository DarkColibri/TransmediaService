const express = require('express')
const router = express.Router()
const db = require('../../db/models')
const Repository = require('../repositoy/base.repository')
const repository = new Repository(db, 'posts')
// Para el Cross- Origin Resource Sharing
// El error este del http
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')

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

router.get('/threads/:id', (req, res) => {
  const { id } = req.params
  console.log('GET THREADS: ' + id)
  repository.getThreadsPosts(id)
    .then(result => {
      console.log('RESULT: ' + JSON.stringify(result))
      res.json(result)
    })
    .catch(err => {
      res.status(404).json({ message: err })
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

// async getThreadsPosts(threadId) {
//   console.log('[getThreadsPosts]' + threadId)
//   const entities = await this._entityRepository.getThreadsPosts(threadId)
//   console.log('[getThreadsPosts] '+ JSON.stringify( entities ))
//   if (!entities) return null
//   return entities
// }

module.exports = router
