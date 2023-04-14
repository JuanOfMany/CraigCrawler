const { pool } = require("./db");

async function insertData() {
    return await pool.query(
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
        'miami',
        'miata',
        'Example Post',
        'lorem ipsum sum',
        1992,
        6000,
        'www.juanpinol.com',
        'yellow'
      );`
    );
    console.log(`Added a Miata to the database`);
  }


async function getData(req, res) {
  await pool
    .query(
      `SELECT * FROM post_info WHERE location='miami';`,
      ((err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }
        res.status(200).send(results.rows);
      })
    )
}

module.exports = { insertData, getData }