const express = require('express')
const app = express()
const port = 8080


app.get('/', (req, res) => {
  res.send('Hello world!')
})


app.get('/health/live', (req, res) => {
  res.send("I am healthy ..")
})

app.listen(port, () => {
  console.log(`I am a basic backend running on port ${port}`)
})
