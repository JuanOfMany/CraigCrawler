const { pool } = require("./db");

async function insertDataFromReq(req, res) {
  await pool.query(
    `INSERT INTO post_info (
        location,
        model,
        title,
        description,
        year,
        price,
        link,
        color
      ) VALUES (
        '${req.body.location}',
        '${req.body.model}',
        '${req.body.title}',
        '${req.body.description}',
        ${req.body.year},
        ${req.body.price},
        '${req.body.link}',
        '${req.body.color}'
      );`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(201).send("Added Miata to the Database");
    }
  );
}

async function getData(req, res) {
  await pool.query(
    `SELECT * FROM post_info WHERE location='miami';`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).send(results.rows);
    }
  );
}

async function insertScrapedData(dataPoint) {
  await pool.query(
    `INSERT INTO post_info (
        location,
        model,
        title,
        description,
        year,
        price,
        link,
        color
      ) VALUES (
        '${dataPoint.location}',
        '${dataPoint.model}',
        '${dataPoint.title}',
        '${dataPoint.description}',
        ${dataPoint.year},
        ${dataPoint.price},
        '${dataPoint.link}',
        '${dataPoint.color}'
      );`,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log("Added Miata to the Database");
    }
  );
}

// let sampleData = {
//   "location": "miami",
//   "model": "miata",
//   "title": "testing scrape data input",
//   "description": "this should work",
//   "year": 1992,
//   "price": 6000,
//   "link": "www.juanpinol.com",
//   "color": "yellow"
// }
//
// insertScrapedData(sampleData);

module.exports = { insertDataFromReq, getData, insertScrapedData };
