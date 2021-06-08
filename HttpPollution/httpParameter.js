var express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("id: " + req.query.id);
    console.log("id: " + req.query.id);
});

app.listen(8080);
// http://localhost:8080/?id=123&id=abc&id=blaalaa
