var http = require("http");
var fileSystem = require("fs");
var path = require("path");

var express = require("express");
var app = express();

app.get("/", (req, res) => {
    var filePath = path.join(__dirname, "/" + req.query.load);

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
});

app.listen(8080);

// loads file
// http://localhost:8080/?load=user-input.js

// http://localhost:8080/?load=../../../etc/passwd
