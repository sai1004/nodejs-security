var express = require("express");

var app = express();

var global = 0;

app.get("/", (req, res) => {
    global = global + 1;
    res.send("<h4>Beware of global scope.</h4>" + "Global Scope Variable is: " + global);
});

app.listen(8080);
