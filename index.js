var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./server/routes.js");

var dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.load();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});