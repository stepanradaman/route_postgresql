// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: "your_name",
//     password: "your_password",
//     host: "localhost",
//     port: 5432,
//     database: "dbroute"
// })

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "stepan",
    host: "localhost",
    port: 5432,
    database: "dbroute"
})

module.exports = pool;
