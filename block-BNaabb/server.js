var http = require("http");
var fs = require('fs')
function handleRequest(req, res) {
  if(req.method === 'POST' && req.url === '/'){
      var store = '';
   req.on('data' , (chunk) =>{
       store = store + chunk;
   })

   req.on('end' ,() => {
       res.write(store);
       res.end();
      // console.log(store)

   })
  }
 
}

var server = http.createServer(handleRequest);
server.listen(3456, () => {
  console.log("server listioning on port 3456");
});
