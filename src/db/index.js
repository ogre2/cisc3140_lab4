// Importing sqlite3
const sqlite3 = require('sqlite3')
// Importing path
const path = require('path')
// Importing csvtojson
const csvtojson = require('csvtojson')
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
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
        console.log('Connected to database...'.blue)
        db.run(`CREATE TABLE cars (
            car_id INT PRIMARY KEY,
            email TEXT UNIQUE,
            name TEXT,
            year INT,
            make TEXT,
            model TEXT,
            score INT
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                csvtojson().fromFile(DATA_CSV)
                .then(data => {
                    let insert = 'INSERT INTO cars (Car_ID, Email, Name, Year, Make, Model, Score) VALUES (?,?,?,?,?,?,?)';

                    for(const item of data) {
                        let total = parseInt(item.Racer_Turbo) + parseInt(item.Racer_Supercharged) + parseInt(item.Racer_Performance) + parseInt(item.Racer_Horsepower) + parseInt(item.Car_Overall) + parseInt(item.Engine_Modifications) + parseInt(item.Engine_Performance) + parseInt(item.Engine_Chrome) + parseInt(item.Engine_Detailing) + parseInt(item.Engine_Cleanliness) + parseInt(item.Body_Frame_Undercarriage) + parseInt(item.Body_Frame_Suspension) + parseInt(item.Body_Frame_Chrome) + parseInt(item.Body_Frame_Detailing) + parseInt(item.Body_Frame_Cleanliness) + parseInt(item.Mods_Paint) + parseInt(item.Mods_Body) + parseInt(item.Mods_Wrap) + parseInt(item.Mods_Rims) + parseInt(item.Mods_Interior) + parseInt(item.Mods_Other) + parseInt(item.Mods_ICE) + parseInt(item.Mods_Aftermarket) + parseInt(item.Mods_WIP) + parseInt(item.Mods_Overall);
                        
                        db.run(insert, [
                            item.Car_ID,
                            item.Email,
                            item.Name, 
                            item.Year,
                            item.Make, 
                            item.Model,
                            total
                        ]);
                    }
                }).catch(err => {
                    // log error if any
                    console.log(err);
                });
                // Table just created, creating some rows
            }
        });  
    }
});

module.exports = db