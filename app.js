//Import necessary modules:
const express   = require("express");
const hbs       = require("hbs");
const app       = express();

//Create an instance of the Express application 
//path - a built-in Node.js module that provides utilities for working with file and directory paths
const path      = require("path");

//Set the view engine (handlebars) and views directory
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//Serve static files in Public directory
app.use(express.static(path.join(__dirname, "public")));

//Define routes
app.get("/", (req, res, next) => res.render("index"));

app.get("/players", (req, res, next) => res.render("players"));

app.get("/teams", (req, res, next) => res.render("teams"));

// Start server
app.listen(3001, () => console.log('server listening on Port 3001'));
