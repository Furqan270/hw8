var express = require('express')
var app = express()
var pool = require('./query.js')
const route = require ('./router.js')
pool.connect((err, res) => {
    console.log(err)
    console.log('connected')
})

app.use(route)
app.listen(3000)