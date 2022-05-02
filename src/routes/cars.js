// Importing config
const config = require('../config')
// Importing express router
const router = require('express').Router()
// Importing database
const db = require('../db')

// Enabling colors
config.colors.enable()

/**
 * @params NONE
 * @method GET
 * This is a test GET request for the /cars API endppoint, if successful,
 * the user will be met with a message:success to indicate successful access of endpoint.
 * All data in the database will also be shown in JSON format.
 * 
 * If unsuccesful, the user will be met with an error message.
 */
router.get('/cars', (req, res) => {
    // TODO GET all cars
    try {
        let sql = 'SELECT * FROM cars'
        let params = []
    
        db.all(sql, params, (err, rows) => {
            if (err) {
              res.status(400).json({"error":err.message});
              return;
            }
            else {
                res.json({
                    message: 'success',
                    data: rows
                })
            }
        });
    } catch(error) {
        console.log(error.message.red)

        res.status(500).json({
            message: 'Not found.'
        })
    }
})

/**
 * @param Car_ID
 * @method GET
 * This GET request will return an individual database entry specified by the ID paramater.
 * If the entry requested exists in the database, the user will be able to view the entry.
 * 
 * If the entry does not exist in the database, the user will be prompted with an error.
 */
router.get('/cars/:id', (req, res) => {
    // TODO GET car by ID
    try {
        let sql = 'SELECT * FROM cars WHERE car_id = ?'
        let params = [req.params.id]
        
        db.all(sql, params, (err, rows) => {
            if(err) {
                res.status(400).json({'error': err.message})

                return
            }
            else {
                res.status(200).json({
                    message: 'success',
                    data: rows
                })
            }
        })
    } catch(error) {
        console.log(error.message.red)

        res.status(500).json({
            message: 'Not found.'
        })
    }
})

router.post('/cars/new', (req, res) => {
    // TODO POST new car entry
    try {
        let sql = 'INSERT INTO cars (car_id, email, name, year, make, model, score) VALUES (?, ?, ?, ?, ?, ?, ?)'
        let params = [req.body.car_id, req.body.email, req.body.name, req.body.year, req.body.make, req.body.model, req.body.score]

        db.run(sql, params, err => {
            if(err) {
                return console.log(err.message)
            }

            res.json({
                message: 'success',
                data: req.body
            })
        })

    } catch(error) {
        console.log(error.message.red)
        
        res.status(500).json({
            message: 'Not found'
        })
    }
})
// Exporting router
module.exports = router