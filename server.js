const http = require("http");
http.createServer((req,res) => {
res.end("Hello from Azure VM!");
}).listen(3000);
