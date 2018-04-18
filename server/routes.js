const express = require('express')
const router = express.Router()
const server = require('./server')
const db = require('./db')


router.get('/:countryCode', (req, res) => {
  db.clickedCountry()
  .then(codes => {
    res.json(codes)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})



module.exports = router
