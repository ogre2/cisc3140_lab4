// Importing path
const path = require('path')
// Importing dotenv
const dotenv = require('dotenv')
// Importing colors
const colors = require('colors')

// Configuring location of env variables
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Exporting configurations
module.exports = {
    'database_name': './src/db/db.sqlite3',
    'port': process.env.PORT || 5000,
    colors
}