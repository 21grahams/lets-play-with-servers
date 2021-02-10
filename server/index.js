const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000
const axios = require('axios');

app.use(cors());
app.get('/', (req, res) => {
  res.status(200)
  res.send('Hello World!')


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})