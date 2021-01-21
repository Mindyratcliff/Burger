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

app.post("/api/burgers/:id", function(req, res){
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, data){
        if (err) {
            return res.status(500).end();
        }
        res.json({ id: result.insertId });
        console.log({ id: result.insertId});
    });
});

//UPDATE

app.put("/api/burgers/:id", function(req, res){
    connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger, req.params.id], function (err, data){
        if (err) {
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

//DELETE

app.delete("api/burgers/:id", function (req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, data){
        if (err) {
            return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

//Listener

app.listen(PORT, function (){
    console.log("Server listening on " + PORT);
});

