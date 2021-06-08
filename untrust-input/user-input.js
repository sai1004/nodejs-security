var http = require("http");
var url = require("url");

http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url, true);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello" + parsedUrl.query.name); // untrusted data
    res.end();
    // });
}).listen(8080);

// payloads
// http://localhost:8080/?name=%22%3Cscript%3Ealert(0)%3C/script%3E%22
// http://localhost:8080/?name=<img src=x onError=alert(0) />
