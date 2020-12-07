const { Pool } = require("pg");
require("dotenv").config();

let pool;
let config;

if (process.env.DATABASE_URL) {
  //it's set in Heroku
  const connectionString = process.env.DATABASE_URL;
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  //default local config
  config = {
    host: "localhost",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
  };
}
pool = new Pool(config);

exports.Connection = pool;
