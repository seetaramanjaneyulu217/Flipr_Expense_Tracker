const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()

// Imports 
const connectToDataBase = require('./config/connect.js')
const UserLoginRoutes = require('./routes/UserLoginRoutes.js')


// Middlewares and function calls
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()
connectToDataBase()


// Middlewares for routes
app.use('/user', UserLoginRoutes)



app.get('/', (req, res) => {
    res.send('Hello I am your server')
})


// Running the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})