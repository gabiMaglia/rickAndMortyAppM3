const express = require('express');
const server = express();
var cors = require('cors')
const router = require('./routes/index')



// MIDDLEWARES
server.use(express.json());

server.use(cors())
// ENDMIDDLEWARES

server.use('/rickandmorty', router) 

module.exports = server
