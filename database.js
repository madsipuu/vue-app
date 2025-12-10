 // database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres", //[add your password here]
    database: "Vuetable", //[add the name of your database here]
    host: "localhost",
    port: "5432"
});

module.exports = pool;