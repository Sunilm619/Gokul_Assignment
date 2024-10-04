const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const apiroute = require('./API/api')

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000;


mongoose.connect("mongodb+srv://sunilmanga60:bangbang-23@sunilm19.ne13j3y.mongodb.net/GokulInterface?retryWrites=true&w=majority&appName=sunilm19"
)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

app.listen(PORT, () => {
    console.log(`PORT Running at ${PORT}`)
})

app.use('/regster', apiroute)