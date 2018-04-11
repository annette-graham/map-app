const express = require('express')
const routes = require('./routes')
const fs = require('fs')

const server  = express()
const path = require('path')

server.use(express.static(path.join(__dirname, '../public')))




//routes

server.use('/', routes)

module.exports = server
