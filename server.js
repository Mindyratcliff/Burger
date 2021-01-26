//Set up dependencies
const express = require('express');
const exphbs = require('express-handlebars');


const app = express();

//Serve static content
app.use(express.static("public"));

//Set up Port
var PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import Routes
const routes = require("controllers/burgers_controllers.js");

app.use(routes);


//Listener

app.listen(PORT, function (){
    console.log("Server listening on " + PORT);
});

