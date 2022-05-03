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
        console.log(error.message.red.bold)

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
        let sql = 'SELECT car_id,email,name,year,make,model,score FROM cars WHERE car_id = ?'
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
        console.log(error.message.red.bold)

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
        let sql = 'SELECT car_id,email,name,year,make,model,score FROM cars WHERE make = ?'
        // Query paramater
        let params = [req.params.make]

        // Retrieving the data entry specified by id from the database
        db.all(sql, params, (err, row) => {
            // If we encounter an error
            if(err) {
                // Log the error to the console
                console.log(err.message.red)

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
        console.log(error.message.red.bold)

        // Return a server error code and nessage
        res.status(500).json({
            message: 'Not found'
        })
    }
})

/**
 * @param 
 * @method POST
 * This POST request will add a new car entry into the database.
 * If the entries is successfully added, the user will be prompted with a success message
 * and the req.body. They will also be able to view the entries in the /cars endpoint.
 * 
 * If the entry add is not successful, the user will be prompted with an error nessage.
 */
router.post('/cars', (req, res) => {
    // TODO POST new car entry
    try {
        // Calculating the score value
        let score = parseInt(req.body.racer_turbo) + parseInt(req.body.racer_supercharged) + parseInt(req.body.racer_performance) + parseInt(req.body.racer_horsepower) + parseInt(req.body.car_overall) + parseInt(req.body.engine_modifications) + parseInt(req.body.engine_performance) + parseInt(req.body.engine_chrome) + parseInt(req.body.engine_detailing) + parseInt(req.body.engine_cleanliness) + parseInt(req.body.body_frame_undercarriage) + parseInt(req.body.body_frame_suspension) + parseInt(req.body.body_frame_chrome) + parseInt(req.body.body_frame_detailing) + parseInt(req.body.body_frame_cleanliness) + parseInt(req.body.mods_paint) + parseInt(req.body.mods_body) + parseInt(req.body.mods_wrap) + parseInt(req.body.mods_rims) + parseInt(req.body.mods_interior) + parseInt(req.body.mods_other) + parseInt(req.body.mods_ice) + parseInt(req.body.mods_aftermarket) + parseInt(req.body.mods_wip) + parseInt(req.body.mods_overall)

        // SQL Query command
        let sql = 'INSERT INTO cars (car_id, email, name, year, make, model, racer_turbo, racer_supercharged, racer_performance, racer_horsepower, car_overall, engine_modifications, engine_performance, engine_chrome, engine_detailing, engine_cleanliness, body_frame_undercarriage, body_frame_suspension, body_frame_chrome, body_frame_detailing, body_frame_cleanliness, mods_paint, mods_body, mods_wrap, mods_rims, mods_interior, mods_other, mods_ice, mods_aftermarket, mods_wip, mods_overall, score) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        // Query paramater
        let params = [req.body.car_id, req.body.email, req.body.name, req.body.year, req.body.make, req.body.model, req.body.racer_turbo, req.body.racer_supercharged, req.body.racer_performance, req.body.racer_horsepower, req.body.car_overall, req.body.engine_modifications, req.body.engine_performance, req.body.engine_chrome, req.body.engine_detailing, req.body.engine_cleanliness, req.body.body_frame_undercarriage, req.body.body_frame_suspension, req.body.body_frame_chrome, req.body.body_frame_detailing, req.body.body_frame_cleanliness, req.body.mods_paint, req.body.mods_body, req.body.mods_wrap, req.body.mods_rims, req.body.mods_interior, req.body.mods_other, req.body.mods_ice, req.body.mods_aftermarket, req.body.mods_wip, req.body.mods_overall, score]
        
        // Creating new car database entry
        db.run(sql, params, err => {
            // If we encounter an error
            if(err) {
                // Log the error to the console
                console.log(err.message)

                // Display a 400 status error and message
                res.status(400).json({
                    message: 'Something went wrong.'
                })
            }
            // Otherwise
            else {
                // Return a 200 status code for successful entry creation and show the JSON data
                res.status(200).json({
                    message: 'success',
                    data: req.body
                })
            }
        })
    // Catche error
    } catch(error) {
        // Log the error to the console
        console.log(error.message.red.bold)

        // Return a server error code and nessage
        res.status(500).json({
            message: 'Not found'
        })
    }
})

router.patch('/cars/:id', (req, res) => {
    try {
        // SQL Query command
        let sql = `UPDATE cars SET
        email = COALESCE(?,email), name = COALESCE(?,name), year = COALESCE(?,year), make = COALESCE(?,make), model = COALESCE(?,model), racer_turbo = COALESCE(?,racer_turbo), racer_supercharged = COALESCE(?,racer_supercharged), racer_performance = COALESCE(?,racer_performance), racer_horsepower = COALESCE(?,racer_horsepower), car_overall = COALESCE(?,car_overall), engine_modifications = COALESCE(?,engine_modifications), engine_performance = COALESCE(?,engine_performance), engine_chrome = COALESCE(?,engine_chrome), engine_detailing = COALESCE(?,engine_detailing), engine_cleanliness = COALESCE(?,engine_cleanliness), body_frame_undercarriage = COALESCE(?,body_frame_undercarriage), body_frame_suspension = COALESCE(?,body_frame_suspension), body_frame_chrome = COALESCE(?,body_frame_chrome), body_frame_detailing = COALESCE(?,body_frame_detailing), body_frame_cleanliness = COALESCE(?,body_frame_cleanliness), mods_paint = COALESCE(?,mods_paint), mods_body = COALESCE(?,mods_body), mods_wrap = COALESCE(?,mods_wrap), mods_rims = COALESCE(?,mods_rims), mods_interior = COALESCE(?,mods_interior), mods_other = COALESCE(?,mods_other), mods_ice = COALESCE(?,mods_ice), mods_aftermarket = COALESCE(?,mods_aftermarket), mods_wip = COALESCE(?,mods_wip), mods_overall = COALESCE(?,mods_overall) WHERE car_id = ?`
        // Query parameter
        let params = [req.body.email, req.body.name, req.body.year, req.body.make, req.body.model, req.body.racer_turbo, req.body.racer_supercharged, req.body.racer_performance, req.body.racer_horsepower, req.body.car_overall, req.body.engine_modifications, req.body.engine_performance, req.body.engine_chrome, req.body.engine_detailing, req.body.engine_cleanliness, req.body.body_frame_undercarriage, req.body.body_frame_suspension, req.body.body_frame_chrome, req.body.body_frame_detailing, req.body.body_frame_cleanliness, req.body.mods_paint, req.body.mods_body, req.body.mods_wrap, req.body.mods_rims, req.body.mods_interior, req.body.mods_other, req.body.mods_ice, req.body.mods_aftermarket, req.body.mods_wip, req.body.mods_overall, req.params.id]
        
        // Updating entry in database
        db.run(sql, params, (err, row) => {
            if(err) {
                // Log the error to the console
                console.log(err.message)

                // Display a 400 status error and message
                res.status(400).json({
                    message: 'Something went wrong.'
                })
            }
            // Otherwise
            else {
                // Return a 200 status code for successful entry update and show the JSON data
                res.status(200).json({
                    message: 'success',
                    data: {
                        car_id: req.params.id,
                        updates: req.body
                    }
                })
            }
        })
    // Catch error
    } catch(error) {
        // Log the error to the console
        console.log(error.message.red.bold)

        // Return a server error code and message
        res.status(500).json({
            message: 'Not found'
        })
    }
})

// Exporting router
module.exports = router