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

// router.get('/restore/category/:category_id', (req,res) => {
//     const {category_id} = req.params
//     const query = `select * from category where category_id = ${category_id}`
    
//     pool.query(query, [category_id], (err, result) => {
//         if(err) throw err
//         res.send(result.rows)
//     })
// })

router.get('/category/:category_id',(req, res) => {
    const {category_id} = req.params
    const query = `select * from category where category_id = ${category_id}`

    pool.query (query, (err, result) => {
        if(err) throw err
        res.send(result.rows)
    })
})

///get film berdasar category

router.get ('/film/:category_id', (req, res) => {
    
    const {category_id} = req.params
    console.log(category_id)

    const query = `SELECT f.title FROM film f JOIN film_category ON f.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.category_id  = ${category_id};`

    pool.query(query, (err, result) => {
        if(err) throw err
        res.send(result.rows)
    })
    
})


module.exports = router