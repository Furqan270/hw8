const Pool = require('pg').Pool
const pool = new Pool({
    user :'postgres',
    host : 'localhost', 
    database : 'restore',
    password : 'Furq0n27*',
    port : 5432
})

module.exports = pool