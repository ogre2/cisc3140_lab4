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

// Creating express instance
const app = express()
// Creating server
const server = http.createServer(app)

// Importing index router
const indexRouter = require('./routes/index')
// Importing cars router
const carsRouter = require('./routes/cars')

// Enabling colors
config.colors.enable()

// Setting json formatting
app.set('json spaces', 2)
// Configuring body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// Using body-parser
app.use(bodyParser.json())
// Using helmet
app.use(helmet())

// Using index router
app.use('/', indexRouter)
// Using cars router
// app.use('/api', carsRouter)

/**
 * @params NONE
 * @method listen
 * Launching the API server using the configured prot
 */
server.listen(config.port, () => {
    console.log(`[nodemon] server is running on port:${config.port}`.green)
})