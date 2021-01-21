//Set up dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

//Set up Port
var PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//GET

app.get("/", function(req,res){
    connection.query("SELECT * FROM burgers;", function (err, data){
        if (err) {
            return res.status(500).end();
        }
        res.render("index", { burgers: data});
    });
});

//POST


