const { pool } = require("./db");

async function insertData() {
  try {
    const res = await pool.query(
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
      );`,
    );
    console.log(`Added a Miata to the database`);
  } catch (error) {
    console.error(error);
  }
}

insertData()