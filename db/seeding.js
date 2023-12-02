const fs = require ('fs')
const pool = require('../query.js')

const seedQuery = fs.readFileSync("./seeding.sql", "utf8")
    pool.query(seedQuery, (err, res) => {
        console.log(err)
        console.log('seeding complete')
        pool.end()
    })
