const express = require('express')
const router = express.Router()
const server = require('./server')
const db = require('./db')


const request = require('superagent')

router.get('/:countryCode', (req, res) => {
  console.log("you got me")
  db.clickedCountry(req.params.countryCode)
  .then(codes => {
    res.json(codes)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


router.put('/:countryCode', (req, res) => {
  db.editNotes(req.body, req.params.countryCode)
  .then((update) => {
    res.json(update)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
