var http = require("http");
var qes = require("querystring")
function handleRequest(req, res) {
    var dataFormat = req.headers['Content-Type']

      var store = '';
   req.on('data' , (chunk) => {
       store = store + chunk;
   })

   req.on('end' ,() => {
    if(req.method ==='POST' && req.url ==='/JSON') {
        res.setHeader('Content-Type' ,'application/json')
     res.end(store)
    }

    if(req.method ==='POST' && req.url ==='/form') {
     var formData =qes.parse(store)
       // res.setHeader('Content-Type' ,'application/json')

     res.end(JSON.stringify(formData))
    }
   })
}

var server = http.createServer(handleRequest);
server.listen(7000, () => {
  console.log("server listioning on port 7000");
});
