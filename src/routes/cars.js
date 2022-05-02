// Importing colors
const colors = require('colors')
// Importing express router
const router = require('express').Router()

// Enabling colors
colors.enable()

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
    // TODO Get all cars
    try {
        // Display all cars
        return res.status(200).json({
            message: 'success',
            data: [
                {
                    car_id: 48,
                    email: 'honoland13@japanpost.jp',
                    name: 'Hernando',
                    year: 2015,
                    make: 'Acura',
                    model: 'TLX',
                    score: 120
                },
                {
                    car_id: 124,
                    email: 'nlighterness2q@umn.edu',
                    name: 'Noel',
                    year: 2015,
                    make: 'Jeep',
                    model: 'Wrangler',
                    score: 95
                },
                {
                    car_id: 222,
                    email: 'eguest47@microsoft.com',
                    name: 'Edan', 
                    year: 2015,
                    make: 'Lexus',
                    model: 'LS250',
                    score: 26
                },
                {
                    car_id: 207,
                    email: 'hchilley40@fema.gov',
                    name: 'Hieronymus',
                    year: 1993,
                    make: 'Honda',
                    model: 'Civic eG',
                    score: 48
                }
            ]
        })
    } catch(error) {
        // Console error message
        console.log(error.message.red)

        // Show user status 500 error
        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
})

// Exporting router
module.exports = router