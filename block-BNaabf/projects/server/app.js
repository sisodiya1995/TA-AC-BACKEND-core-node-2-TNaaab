// path

console.log('../client/index.js');
console.log(__dirname +'../client/index.js')

// server
var http = require('http')
var server =http.createServer(handleRequest);
var fs = require('fs')
var qs =require('querystring')
function handleRequest(req ,res) {
    var store = '';
    req.on('data' , (chunk) => {
        store = store + chunk;
    })
 
   
    req.on('end' ,() => {
        if(req.method === 'GET' && req.url ==='/form'){
            // req.setHeader('Content-Type' ,'text/html')
             fs.createReadStream('./form.html').pipe(res)
         }

        if(req.method ==='POST' && req.url ==='/form') {
            console.log(store);
           var parseData =qs.parse(store);
           console.log(parseData)
           res.setHeader('Content-Type' ,'text/html')
           res.end(`<p>${parseData.name}</p> <p>${parseData.email}</p> <p>${parseData.age}</p >`)
        }

       })

    
   
}

server.listen(3000 ,() =>{
    console.log('Server listioning on th 3k port');
})