var http = require("http");
var url = require("url");
var exe = require("child_process");

http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url, true);
    res.writeHead(200, { "Content-Type": "text/html" });
    exe.exec("ping " + parsedUrl.query.ping, (err, data) => {
        res.write("hello" + data);
        res.end();
    });
}).listen(8080);
// http://localhost:8080/?ping=127.0.0.1;whoami
