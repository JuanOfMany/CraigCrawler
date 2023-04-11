const express = require('express')
const app = express()
const port = 3000
const scrape = require('./craigslistNavigator');



app.get('/scrape', (req, res) => {
  console.log(scrape);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})