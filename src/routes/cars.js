// Importing config
const config = require('../config')
// Importing express router
const router = require('express').Router()
// Importing database
const db = require('../db')

// Enabling colors
config.colors.enable()

/**
 * @param
 * @method GET
 * 
 * This method will GET data from the /cars API endpoint.
 * If successful, the user will be met with a success message as well as all JSON data of 
 * all the entries from the API database.
 * 
 * If unccessful, the user will be prompted with an error message.
 */
router.get('/cars', (req, res) => {
    // TODO GET all cars
    try {
        // SQL query command
        let sql = 'SELECT * FROM cars'
        // Query paramaters
        let params = []

        // Retrieving the data from the database
        db.all(sql, params, (err, row) => {
            // If we encounter an error
            if(err) {
                // Log the error to the console
                console.log(err.message.red)

                // Return a 400 status error and message
                res.status(400).json({
                    message: 'Something went wrong.'
                })
            }
            // Otherwise
            else {
                // Return a 200 status code for successful retrieval and show the JSON data
                res.status(200).json({
                    message: 'success',
                    data: row
                })
            }
        })
    // Catch error
    } catch(error) {
        // Log the error to the console
        console.log(error.message.red)

        // Return a server error code and nessage
        res.status(500).json({
            message: 'Server error.'
        })
    }
})

/**
 * @param id
 * @method GET
 * This GET request will return an individual database entry specified by the ID paramater.
 * If the entry requested exists in the database, the user will be able to view the entry.
 * 
 * If the entry does not exist in the database, the user will be prompted with an error nessage.
 */
router.get('/cars/:id', (req, res) => {
    // TODO GET car with specific id
    try {
        // SQL query command
        let sql = 'SELECT * FROM cars WHERE car_id = ?'
        // Query paramater
        let params = [req.params.id]

        // Retrieving the data entry specified by id from the database
        db.get(sql, params, (err, row) => {
            // If we encounter an error
            if(err) {
                // Log the error to the console
                console.log(err.message.red)

                // Return a 400 status error and message
                res.status(400).json({
                    message: 'Something went wrong.'
                })
            }
            // Otherwise
            else {
                // Return a 200 status code for successful retrieval and show the JSON data
                res.status(200).json({
                    message: 'success',
                    data: [row]
                })
            }
        })
    // Catch error
    } catch(error) {
        // Log the error to the console
        console.log(error.message.red)

        // Return a server error code and nessage
        res.status(500).json({
            message: 'Not found.'
        })
    }
})

/**
 * @param make
 * @method GET
 * This GET request will return all database entries specified by the make paramater.
 * If the entries requested exist in the database, the user will be able to view all of those entries.
 * 
 * If the entries do not exist in the database, the user will be prompted with an error nessage.
 */
router.get('/cars/make/:make', (req, res) => {
    // TODO GET cars by same make
    try {
        // SQL Query command
        let sql = 'SELECT * FROM cars WHERE make = ?'
        // Query paramater
        let params = [req.params.make]

        // Retrieving the data entry specified by id from the database
        db.all(sql, params, (err, row) => {
            // If we encounter an error
            if(err) {
                // Log the error to the console
                console.log(err.message)

                // Return a 400 status error and message
                res.status(400).json({
                    message: 'Something went wrong'
                })
            }
            // Otherwise
            else {
                // Return a 200 status code for successful retrieval and show the JSON data
                res.status(200).json({
                    message: 'success',
                    data: row
                })
            }
        })
    // Catch error
    } catch(error) {
        // Log the error to the console
        console.log(error.message)

        // Return a server error code and nessage
        res.status(500).json({
            message: 'Not found'
        })
    }
})

// Exporting router
module.exports = router