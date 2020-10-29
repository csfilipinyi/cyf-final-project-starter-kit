const { Pool } = require("pg");

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
  
    config = {

    user: process.env.db_user,
    host: "localhost",
    database: "cyf_knowledge_checklist",
    password: process.env.db_password,
    port: process.env.db_port,
  };

}
pool = new Pool(config);

exports.Connection = pool;
//module.exports = pool;
