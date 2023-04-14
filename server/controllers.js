const { pool } = require("./db");

async function insertData(req, res) {
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

module.exports = { insertData, getData };
