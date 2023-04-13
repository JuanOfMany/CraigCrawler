const express = require('express')
const app = express()
const port = 3000
const {scraper} = require('./craigslistNavigator');



app.get('/scrape', (req, res) => {
  scraper()
  .then((results) => res.send(results));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})