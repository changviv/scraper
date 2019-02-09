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
mongoose.connect("mongodb://localhost/craigslist", { useNewUrlParser: true });

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
