var morgan = require('morgan')
const express = require('express')
const app = express()
app.use(morgan('tiny'))

const port = 9080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})