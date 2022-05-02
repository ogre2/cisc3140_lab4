// Importing express
const express = require('express')
// Importing http
const http = require('http')
// Importing body-parser
const bodyParser = require('body-parser')
// Importing config file
const config = require('./config/')
// Importing helmet
const helmet = require('helmet')
// Importing colors
const colors = require('colors')

// Creating express instance
const app = express()
// Creating server
const server = http.createServer(app)


// Enabling colors
colors.enable()

// Setting json formatting
app.set('json spaces', 2)
// Using body-parser
app.use(bodyParser.json())
// Using helmet
app.use(helmet())

/**
 * @params NONE
 * @method GET 
 * This is a test GET request of our root API URL, if successful,
 * the user will be met with a message:OK to indicate that the API is up and running.
 * If unsuccesful, the user will be met with an error message.
 */
app.get('/', (req, res) => {
    try {
        return res.status(200).json({
            message: 'OK'
        })
    } catch(error) {
        console.log(error.message.red)

        return res.status(500).json({
            message: 'Something went wrong while connecting to API.'
        })
    }
})

/**
 * @params NONE
 * @method listen
 * Launching the API server using the configured prot
 */
server.listen(config.port, () => {
    console.log(`[nodemon] server is running on port:${config.port}`.green)
})