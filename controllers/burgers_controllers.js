//Dependencies
const express = require("express");
const connection = require("../config/connection.js");
const router = express.Router();

//Import Burgers
const burgers = require("../models/burger.js");

//GET

router.get("/", function(req,res){
    burgers.all(function (data){
        
        res.render("index", { burgers: data});
    });
});

//POST

router.post("/api/burgers/:id", function(req, res){
    burgers.insertOne({
        burger_name: req.body.burger,
        devoured: false
    }, function(data){
        res.json({id: result.insertId})
    })
    
});

//UPDATE

router.put("/api/burgers/:id", function(req, res){
    var state = "id = " + req.params.id;

    burgers.update({
        devoured: true
    }, state, function(data)
    {
        res.status(200).end();
    });
});

//DELETE

router.delete("api/burgers/:id", function (req, res) {
    var state = "id = " + req.params.id;
    burgers.deleteOne(state, function (data){
     
        res.status(200).end();
    });
    
});

//Export

module.exports = router;