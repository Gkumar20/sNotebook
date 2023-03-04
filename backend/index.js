const express = require('express');
const { json } = require('express');
const app = express()
const port = 5000


//connected to mongo-database
const connectToMongo = require('./db');
connectToMongo();


//this used as a middleware to send the json as response when using routes
app.use(express.json())
//this is use routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})