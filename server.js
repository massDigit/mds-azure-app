const http = require("http");
http.createServer((req,res) => {
res.end("Hello from Azure your good!");
}).listen(3000);
