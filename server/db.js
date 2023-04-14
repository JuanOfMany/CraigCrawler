const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const createTable = function () {
  pool
    .query(`
      CREATE TABLE IF NOT EXISTS "post_info" (
          "post_id" SERIAL NOT NULL,
          "location" VARCHAR(255) NOT NULL,
          "model" VARCHAR(255) NOT NULL,
          "title" VARCHAR(255) NOT NULL,
          "description" TEXT NOT NULL,
          "year" INTEGER NOT NULL,
          "price" INTEGER NOT NULL,
          "link" VARCHAR(255) NOT NULL,
          "color" VARCHAR(255) NOT NULL,
          CONSTRAINT "pk_post_id" primary key ("post_id")
      );
    `)
    .then((res) => console.log(res));
  console.log(`Connected to ${process.env.PGDATABASE} database.`);
};

module.exports = { pool };
