// Importing config file
const config = require('../config')
// Importing express router
const router = require('express').Router()

// Enabling colors
config.colors.enable()

/**
 * @params NONE
 * @method GET
 * This is a test GET request of our root API URL, if successful,
 * the user will be met with a message:OK to indicate that the API is up and running.
 * If unsuccesful, the user will be met with an error message.
 */
router.get('/', (req, res) => {
    try {
        return res.status(200).json({
            message: 'OK'
        })
    } catch(error) {
        console.log(error.message.red)

        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
})

// Exporting router
module.exports = router