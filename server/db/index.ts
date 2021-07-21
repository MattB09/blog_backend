require('dotenv').config();
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  port: 5432,
})

export default pool;