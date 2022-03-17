var http = require("http");
var fs = require('fs')
function handleRequest(req, res) {
   // res.setHeader('Content -Type' ,'text/plain')
 fs.createReadStream('./readme.txt').pipe(res);
 
}

var server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log("server listioning on port 5000");
});
