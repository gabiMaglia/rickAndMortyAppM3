const express = require('express');
var morgan = require('morgan')
const server = express();
var cors = require('cors')
const router = require('./routes/index')



// MIDDLEWARES
server.use(cors())
server.use(express.json());
server.use(morgan('tiny'))
// ENDMIDDLEWARES

server.use('/rickandmorty', router) 

module.exports = server
