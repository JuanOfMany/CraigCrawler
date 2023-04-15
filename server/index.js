const express = require('express');
const path = require('path');

const {scraper} = require('./craigslistNavigator');

const port = 3000
const app = express();


const { getData, insertDataFromReq } = require('./controllers.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/postinfo', getData)

app.post('/postinfo', insertDataFromReq)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})