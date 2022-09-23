// Require packages 
const express = require("express");
const mongodb = require("mongodb").MongoClient;
const cors = require("cors");

// Set up app with express
const app = express();

// Set up database
let db;

// Connect to mongodb from server
let connectionString = "mongodb://localhost:27017/web-traveldestinations";

mongodb.connect(
    connectionString,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err, client) => {
        db = client.db();
        app.listen(3000);
    }
);

// Set up app settings
app.use(express.json());
app.use(cors());

// HTTP POST method
app.post("/traveldestination", (req,res) => {
    const travelDestination = {
        title: req.body.title,
        description: req.body.description,
        dateFrom: req.body.dateFrom,
        dateTo: req.body.dateTo,
        country: req.body.country,
        location: req.body.location,
        googleMapsLink: req.body.googleMapsLink,
    };

    if (travelDestination.title !== "") {
        if (isNaN(travelDestination.title[0])) {
            if (travelDestination.title[0].toUpperCase() === travelDestination.title[0]) {
                if (travelDestination.description !== "") {
                    if (travelDestination.description.length >= 50 && travelDestination.description.length <= 100) {
                        if (isNaN(travelDestination.description[0])) {
                            if (travelDestination.description[0].toUpperCase() === travelDestination.description[0]) {
                                if (travelDestination.country !== "") {
                                    if (isNaN(travelDestination.country)) {
                                        if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                            if (travelDestination.location !== "") {
                                                if (isNaN(travelDestination.location[0])) {
                                                    if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                        db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                            res.status(201);
                                                            res.send("Got a POST request");            
                                                        }
                                                    );
                                                    }
                                                    else {
                                                        console.log("ERROR: Location must be capitalized!")
                                                    }
                                                }
                                                else {
                                                    db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                        res.status(201);
                                                        res.send("Got a POST request");            
                                                    }
                                                );
                                                }
                                            } else {
                                                console.log("ERROR: Location input field is empty!")
                                            }
                                        }
                                        else {
                                            console.log("ERROR: Location must be capitalized!")
                                        }
                                    }
                                    else {
                                        console.log("ERROR: Country must only contain letters!")
                                    }
                                } else {
                                    console.log("ERROR: Country input field is empty!")
                                }
                            }
                            else {
                                console.log("ERROR: Description must be capitalized!")
                            }
                        }
                        else {
                            if (travelDestination.country !== "") {
                                if (isNaN(travelDestination.country)) {
                                    if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                        if (travelDestination.location !== "") {
                                            if (isNaN(travelDestination.location[0])) {
                                                if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                    db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                        res.status(201);
                                                        res.send("Got a POST request");            
                                                    }
                                                );
                                                }
                                                else {
                                                    console.log("ERROR: Location must be capitalized!")
                                                }
                                            }
                                            else {
                                                db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                    res.status(201);
                                                    res.send("Got a POST request");            
                                                }
                                            );
                                            }
                                        } else {
                                            console.log("ERROR: Location input field is empty!")
                                        }
                                    }
                                    else {
                                        console.log("ERROR: Location must be capitalized!")
                                    }
                                }
                                else {
                                    console.log("ERROR: Country must only contain letters!")
                                }
                            } else {
                                console.log("ERROR: Country input field is empty!")
                            }
                        }
                    }
                    else {
                        console.log("ERROR: Description must be between 50 and 100 characters!")
                    }
                } else {
                    console.log("ERROR: Description input field is empty!")
                }
            }
            else {
                console.log("ERROR: Title must be capitalized!")
            }
        }
        else {
            if (travelDestination.description !== "") {
                if (travelDestination.description.length >= 50 && travelDestination.description.length <= 100) {
                    if (isNaN(travelDestination.description[0])) {
                        if (travelDestination.description[0].toUpperCase() === travelDestination.description[0]) {
                            if (travelDestination.country !== "") {
                                if (isNaN(travelDestination.country)) {
                                    if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                        if (travelDestination.location !== "") {
                                            if (isNaN(travelDestination.location[0])) {
                                                if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                    db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                        res.status(201);
                                                        res.send("Got a POST request");            
                                                    }
                                                );
                                                }
                                                else {
                                                    console.log("ERROR: Location must be capitalized!")
                                                }
                                            }
                                            else {
                                                db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                    res.status(201);
                                                    res.send("Got a POST request");            
                                                }
                                            );
                                            }
                                        } else {
                                            console.log("ERROR: Location input field is empty!")
                                        }
                                    }
                                    else {
                                        console.log("ERROR: Location must be capitalized!")
                                    }
                                }
                                else {
                                    console.log("ERROR: Country must only contain letters!")
                                }
                            } else {
                                console.log("ERROR: Country input field is empty!")
                            }
                        }
                        else {
                            console.log("ERROR: Description must be capitalized!")
                        }
                    }
                    else {
                        if (travelDestination.country !== "") {
                            if (isNaN(travelDestination.country)) {
                                if (travelDestination.country[0].toUpperCase() === travelDestination.country[0]) {
                                    if (travelDestination.location !== "") {
                                        if (isNaN(travelDestination.location[0])) {
                                            if (travelDestination.location[0].toUpperCase() === travelDestination.location[0]) {
                                                db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                    res.status(201);
                                                    res.send("Got a POST request");            
                                                }
                                            );
                                            }
                                            else {
                                                console.log("ERROR: Location must be capitalized!")
                                            }
                                        }
                                        else {
                                            db.collection("traveldestinations").insertOne(travelDestination, (err,info) => {
                                                res.status(201);
                                                res.send("Got a POST request");            
                                            }
                                        );
                                        }
                                    } else {
                                        console.log("ERROR: Location input field is empty!")
                                    }
                                }
                                else {
                                    console.log("ERROR: Location must be capitalized!")
                                }
                            }
                            else {
                                console.log("ERROR: Country must only contain letters!")
                            }
                        } else {
                            console.log("ERROR: Country input field is empty!")
                        }
                    }
                }
                else {
                    console.log("ERROR: Description must be between 50 and 100 characters!")
                }
            } else {
                console.log("ERROR: Description input field is empty!")
            }
        }
    } else {
        console.log("ERROR: Title input field is empty!")
    }
});

// HTTP GET method
app.get("/traveldestination", (req,res) => {
    db.collection("traveldestinations").find().toArray(
        (err, items) => {
            res.status(200);
            res.send(items);
        }
    );
})