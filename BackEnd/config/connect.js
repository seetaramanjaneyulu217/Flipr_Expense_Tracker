const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectToDataBase = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected SuccessFully'))
    .catch(() => console.log('Error connecting to MongoDB'))
}

module.exports = connectToDataBase