const express = require('express')
const router = express.Router()
const server = require('./server')
const db = require('./db')


const request = require('superagent')

router.get('/:countryCode', (req, res) => {
  db.clickedCountry(req.params.countryCode)
  .then(codes => {
    res.json(codes)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


router.put('/:countryCode', (req, res) => {
  console.log(req.body, req.params)
  db.editNotes(req.body.notes, req.params.countryCode)
  .then((updatedCountry) => {
    res.json(updatedCountry.notes)
  })
  .catch(err => {
    console.log({err})
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
