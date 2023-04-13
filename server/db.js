const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  try {
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });
    await client.connect();
    const res = await client.query(`
    CREATE TABLE IF NOT EXISTS "Post Info" (
        "id" BIGINT NOT NULL,
        "location" VARCHAR(255) NOT NULL,
        "car model" VARCHAR(255) NOT NULL,
        "title" VARCHAR(255) NOT NULL,
        "description" TEXT NOT NULL,
        "year" INTEGER NOT NULL,
        "price" INTEGER NOT NULL,
        "link" VARCHAR(255) NOT NULL,
        "color" VARCHAR(255) NOT NULL
    );
  `);
// Add primary key ID if table doesn't exist.
//    ALTER TABLE
// "Post Info" ADD PRIMARY KEY("id");
    console.log(res);
    await client.end();
  } catch (error) {
    console.log(error);
  }
};
connectDb();
