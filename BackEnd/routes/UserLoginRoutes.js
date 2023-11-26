const express = require('express')
const router = express.Router()

// Imports from controllers
const { registerUser, userLogin } = require('../controllers/UserLoginControllers.js')

// Routes
router.route('/signup').post(registerUser)
router.route('/login').post(userLogin)

module.exports = router