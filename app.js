var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");

var app = express();

app.use(express.static(path.join(__dirname, "./front/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);


module.exports = app;
