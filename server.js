var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./controllers/routes.js")

var PORT = 3000;

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes)
// Connect to the Mongo DB

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
