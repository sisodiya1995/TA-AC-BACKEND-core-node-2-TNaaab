var http = require("http");
var qes = require("querystring")
function handleRequest(req, res) {
    var dataFormat = req.headers['Content-Type']
    
  if(req.method === 'POST' && req.url === '/json' || req.method === 'POST' && req.url === '/form'){
      var store = '';
   req.on('data' , (chunk) =>{
       store = store + chunk;
   })

   req.on('end' ,() => {
       if(dataFormat === 'application/json'){
           var parseData = JSON.parse(store);
           console.log(dataFormat);
           res.end(store)
          
       }

       if(dataFormat === 'application/x-www-form-urlencoded'){
          var parsedatas = qes.parse(store);
          res.end(JSON.stringify(parsedatas));
       }

   })
  }
 
}

var server = http.createServer(handleRequest);
server.listen(7000, () => {
  console.log("server listioning on port 7000");
});
