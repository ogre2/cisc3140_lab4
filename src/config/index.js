// Importing path
const path = require('path')
// Importing dotenv
const dotenv = require('dotenv')

// Configuring location of env variables
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Exporting configurations
module.exports = {
    'port': process.env.PORT || 5000
}