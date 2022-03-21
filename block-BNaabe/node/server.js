//path

// var path = Require('path');
// var reltivepath ='./index.html';
// console.log(reltivepath);

// var absolutepath =__dirname;
// console.log(absolutepath);

// var absolutepathHtme =(__dirname ,'./index.html');

// Capture data on server

// var http = require("http");
// const { join } = require("path");
// var qes = require("querystring")
// function handleRequest(req, res) {
//     var dataFormat = req.headers['Content-Type']

//       var store = '';
//    req.on('data' , (chunk) => {
//        store = store + chunk;
//    })

//    req.on('end' ,() => {
//     if(req.method ==='POST' && req.url ==='/') {
//         res.setHeader('Content-Type' ,'application/json')
//         res.statusCode =201;
//         res.end(store)
//     }
//    })
// }

// var server = http.createServer(handleRequest);
// server.listen(7000, () => {
//   console.log("server listioning on port 7000");
// });




// var http = require("http");
// const { join } = require("path");
// var qes = require("querystring")
// function handleRequest(req, res) {
//     var dataFormat = req.headers['Content-Type']

//       var store = '';
//    req.on('data' , (chunk) => {
//        store = store + chunk;
//    })

//    req.on('end' ,() => {
//     if(req.method ==='POST' && req.url ==='/') {
//         res.setHeader('Content-Type' ,'application/json')
//         res.statusCode =201;
//         res.end(JSON.parse(store).captain)
//     }
//    })
// }

// var server = http.createServer(handleRequest);
// server.listen(7000, () => {
//   console.log("server listioning on port 7000");
// });


// var http = require("http");
// const { join } = require("path");
// var qes = require("querystring")
// function handleRequest(req, res) {
//     var dataFormat = req.headers['Content-Type']
//     console.log(dataFormat);
//       var store = '';
//    req.on('data' , (chunk) => {
//        store = store + chunk;
//    })

//    req.on('end' ,() => {
//     if(req.method ==='POST' && req.url ==='/') {
// //        res.statusCode =201;
//         res.end(store)
//     }
//    })
// }

// var server = http.createServer(handleRequest);
// server.listen(9000, () => {
//   console.log("server listioning on port 9000");
// });

//5

// var http = require("http");
// const { join } = require("path");
// var qes = require("querystring")
// function handleRequest(req, res) {
//     var dataFormat = req.headers['Content-Type']

//       var store = '';
//    req.on('data' , (chunk) => {
//        store = store + chunk;
//    })

//    req.on('end' ,() => {
//     if(req.method ==='POST' && req.url ==='/') {
//         res.setHeader('Content-Type' ,'text/html')
//         res.statusCode =201;
//         var data = JSON.parse(store)
//          var cap =data.captain;
//         res.end(`<h1>${cap}</h1><h2>${data.team}</h2>`)
//     }
//    })
// }

// var server = http.createServer(handleRequest);
// server.listen(7000, () => {
//   console.log("server listioning on port 7000");
// });
//7

var http = require("http");
var qes = require("querystring")
function handleRequest(req, res) {
    var dataFormat = req.headers['Content-Type']

      var store = '';
   req.on('data' , (chunk) => {
       store = store + chunk;
   })

   req.on('end' ,() => {
    // if(req.method ==='POST' && req.url ==='/JSON') {
    //     res.setHeader('Content-Type' ,'application/json')
    //  res.end(store)
    // }

    if(req.method ==='POST' && req.url ==='/form') {
     var formData =qes.parse(store)
       // res.setHeader('Content-Type' ,'application/json')
      console.log(formData);
     res.end(`<h2>${formData.name}</h2>`)
    }
   })
}

var server = http.createServer(handleRequest);
server.listen(7000, () => {
  console.log("server listioning on port 7000");
});
