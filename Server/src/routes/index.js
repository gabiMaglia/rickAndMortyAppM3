const express = require('express')
const server = require('../index')
const router = express.Router()

const getCharById = require('../controllers/GetCharById')
const handleFavorites = require('../controllers/handleFavorites')
const login = require('../controllers/login')


router.use('GET' getCharById, '/character/:id' )

module.exports = router