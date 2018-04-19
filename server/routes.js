const express = require('express')
const router = express.Router()
const server = require('./server')
const db = require('./db')


const request = require('superagent')

router.get('/:countryCode', (req, res) => {
  console.log("you got me")
  request
    .get('https://restcountries.eu/rest/v2/alpha/' + req.params.countryCode)
    .then(data => res.json(JSON.parse(data.text)))
    .catch(err => res.status(500).json(err))
  // db.clickedCountry(req.params.countryCode)
  // .then(codes => {
  //   res.json(codes)
  // })
  // .catch(err => {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })
})


module.exports = router
