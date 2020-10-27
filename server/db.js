const { Pool } = require('pg')

let pool;
let config;

if (process.env.DATABASE_URL) { //it's set in Heroku
  const connectionString = process.env.DATABASE_URL
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
  }
} else { //default local config
  config = {
  user: process.env.database_user,
  host: 'localhost',
  database: 'cyf_knowledge_checklist',
  password: process.env.database_password,
  port: 5433,

  }
}
pool = new Pool(config)  

exports.Connection = pool
//module.exports = pool;