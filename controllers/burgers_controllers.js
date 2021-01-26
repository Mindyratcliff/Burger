//Dependencies
const express = require("express");
const connection = require("./config/connection.js");
const router = express.Router();

//Import Burgers
const burgers = require("../models/burger.js");

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

//Export

module.exports = router;