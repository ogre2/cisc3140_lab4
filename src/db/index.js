// Importing sqlite3
const sqlite3 = require('sqlite3')
// Importing path
const path = require('path')
// Importing csvtojson
const csv = require('csvtojson')
// Path to config file
const config = require('../config')
// Path to data.csv file
const DATA_CSV = path.join(__dirname, '../data/data.csv')

// Enabling colors
config.colors.enable()

/**
 * Creating our API database using the config db name. The database will host
 * our cars table with each cars ID, owner email and name, car year, manufacturer, and model.
 */
let db = new sqlite3.Database(config.database_name, (err) => {
    // If we encounter an error while creating the database
    if (err) {
        // Log the error message
        console.error(err.message.red)

        // Throw the error as well
        throw err
    // Otherwise proceed with database creation
    } 
    else {
        // Alert the user that they've successfully connected to the database
        console.log('Connected to database...'.blue)

        // Creating the cars table within our database with the columns from the CSV file
        db.run(`CREATE TABLE cars (
            car_id INT PRIMARY KEY,
            email TEXT UNIQUE,
            name TEXT,
            year INT,
            make TEXT,
            model TEXT,
            racer_turbo INT,
            racer_supercharged INT,
            racer_performance INT,
            racer_horsepower INT,
            car_overall INT,
            engine_modifications INT,
            engine_performance INT,
            engine_chrome INT,
            engine_detailing INT,
            engine_cleanliness INT,
            body_frame_undercarriage INT,
            body_frame_suspension INT,
            body_frame_chrome INT,
            body_frame_detailing INT,
            body_frame_cleanliness INT,
            mods_paint INT,
            mods_body INT,
            mods_wrap INT,
            mods_rims INT,
            mods_interior INT,
            mods_other INT,
            mods_ice INT,
            mods_aftermarket INT,
            mods_wip INT,
            mods_overall INT,
            score INT
            )`,
        (err) => {
            // If we get an error
            if (err) {
                // Console log the eror
                console.log(err.message.red)
            } 
            // Otherwise add the data from our csv file to the database cars table
            else {
                // Use the csvtojson package to convert the csv data into json format
                csv().fromFile(DATA_CSV)
                .then(data => {
                    // SQL Insert query command to put data from the columns into the database table
                    let insert = 'INSERT INTO cars (Car_ID, Email, Name, Year, Make, Model, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall, Score) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    
                    // Loop through all rows inside the csv file and add them into the table
                    for(const entry of data) {
                        // Calculating entry score
                        let score = [parseInt(entry.Racer_Turbo) + parseInt(entry.Racer_Supercharged) + parseInt(entry.Racer_Performance) + parseInt(entry.Racer_Horsepower) + parseInt(entry.Car_Overall) + parseInt(entry.Engine_Modifications) + parseInt(entry.Engine_Performance) + parseInt(entry.Engine_Chrome) + parseInt(entry.Engine_Detailing) + parseInt(entry.Engine_Cleanliness) + parseInt(entry.Body_Frame_Undercarriage) + parseInt(entry.Body_Frame_Suspension) + parseInt(entry.Body_Frame_Chrome) + parseInt(entry.Body_Frame_Detailing) + parseInt(entry.Body_Frame_Cleanliness) + parseInt(entry.Mods_Paint) + parseInt(entry.Mods_Body) + parseInt(entry.Mods_Wrap) + parseInt(entry.Mods_Rims) + parseInt(entry.Mods_Interior) + parseInt(entry.Mods_Other) + parseInt(entry.Mods_ICE) + parseInt(entry.Mods_Aftermarket) + parseInt(entry.Mods_WIP) + parseInt(entry.Mods_Overall)]
                    
                        // Use the run function from sqlite database
                        db.run(insert, [
                            entry.Car_ID, entry.Email, entry.Name, entry.Year, entry.Make, entry.Model, entry.Racer_Turbo, entry.Racer_Supercharged, entry.Racer_Performance, entry.Racer_Horsepower, entry.Car_Overall, entry.Engine_Modifications, entry.Engine_Performance, entry.Engine_Chrome, entry.Engine_Detailing, entry.Engine_Cleanliness, entry.Body_Frame_Undercarriage, entry.Body_Frame_Suspension, entry.Body_Frame_Chrome, entry.Body_Frame_Detailing, entry.Body_Frame_Cleanliness, entry.Mods_Paint, entry.Mods_Body, entry.Mods_Wrap, entry.Mods_Rims, entry.Mods_Interior, entry.Mods_Other, entry.Mods_ICE, entry.Mods_Aftermarket, entry.Mods_WIP, entry.Mods_Overall,
                            score
                        ]);
                    }
                }).catch(err => {
                    // log any error we might encounter if any
                    console.log(err);
                });
            }
        });  
    }
});

// Export our created database
module.exports = db