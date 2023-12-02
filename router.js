var express = require('express')
var router = express.Router()
var pool = require('./query.js')
//all film
router.get('/restore', (req, res) => {
    const query = 'select * from film'
    pool.query (query , (err,result) => {
        if(err){
            console.log(err)
        }
        res.send(result.rows)
    })
})

//film berdasar id

router.get('/restore/:film_id',(req, res) => {
    const {film_id} = req.params
    const query = `select * from film where film_id = ${film_id}`

    pool.query (query, (err, result) => {
        if(err) throw err
        res.send(result.rows)
    })
})

//list category

// router.get('/restore/:cateogry_id', (req,res) => {
//     const{category_id} = req.params
//     const query = `select * from category where category_id = ${category_id}`
    
//     pool.query(query, (err, result) => {
//         if(err) throw err
//         res.send(result.rows)
//     })
// })

router.get('/restore/film', (req,res) => {
    const query = 'select film join film_category where f.id = film_category.film_id Join category where c.id = film_category.category_id'
    pool.query(query, (err, result) => {
        if(err) throw err 
        res.send(result.rows)
    })
})
module.exports = router