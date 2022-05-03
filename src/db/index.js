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
            racer_turbo INT,racer_supercharged INT,racer_performance INT,racer_horsepower INT,
            car_overall INT,
            engine_modifications INT,engine_performance INT,engine_chrome INT,engine_detailing INT,engine_cleanliness INT,
            body_frame_undercarriage INT,body_frame_suspension INT,body_frame_chrome INT,body_frame_detailing INT,body_frame_cleanliness INT,
            mods_paint INT,mods_body INT,mods_wrap INT,mods_rims INT,mods_interior INT,mods_other INT,mods_ice INT,mods_aftermarket INT,mods_wip INT,mods_overall,
            score INT
            )`,
        (err) => {
            if (err) {
                // Table already created
            } else {
                csvtojson().fromFile(DATA_CSV)
                .then(data => {
                    let insert = 'INSERT INTO cars (Car_ID, Email, Name, Year, Make, Model, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall, Score) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                    for(const item of data) {
                        let total = parseInt(item.Racer_Turbo) + parseInt(item.Racer_Supercharged) + parseInt(item.Racer_Performance) + parseInt(item.Racer_Horsepower) + parseInt(item.Car_Overall) + parseInt(item.Engine_Modifications) + parseInt(item.Engine_Performance) + parseInt(item.Engine_Chrome) + parseInt(item.Engine_Detailing) + parseInt(item.Engine_Cleanliness) + parseInt(item.Body_Frame_Undercarriage) + parseInt(item.Body_Frame_Suspension) + parseInt(item.Body_Frame_Chrome) + parseInt(item.Body_Frame_Detailing) + parseInt(item.Body_Frame_Cleanliness) + parseInt(item.Mods_Paint) + parseInt(item.Mods_Body) + parseInt(item.Mods_Wrap) + parseInt(item.Mods_Rims) + parseInt(item.Mods_Interior) + parseInt(item.Mods_Other) + parseInt(item.Mods_ICE) + parseInt(item.Mods_Aftermarket) + parseInt(item.Mods_WIP) + parseInt(item.Mods_Overall);
                        
                        db.run(insert, [
                            item.Car_ID,
                            item.Email,
                            item.Name,
                            item.Year,
                            item.Make,
                            item.Model,
                            item.Racer_Turbo,item.Racer_Supercharged,item.Racer_Performance,item.Racer_Horsepower,item.Car_Overall,
                            item.Engine_Modifications,item.Engine_Performance,item.Engine_Chrome,item.Engine_Detailing,item.Engine_Cleanliness,
                            item.Body_Frame_Undercarriage,item.Body_Frame_Suspension,item.Body_Frame_Chrome,item.Body_Frame_Detailing,item.Body_Frame_Cleanliness,
                            item.Mods_Paint,item.Mods_Body,item.Mods_Wrap,item.Mods_Rims,item.Mods_Interior,item.Mods_Other,item.Mods_ICE,item.Mods_Aftermarket,item.Mods_WIP,item.Mods_Overall,
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