var http = require("http");
var server = http.createServer(handleRequest);
var fs = require("fs");
var qs = require("querystring");
var path = require("path");
var url = require("url");
var userDir = path.join(__dirname, "users/");
function handleRequest(req, res) {
  var parsedurl = url.parse(req.url, true);
  var store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });

  req.on("end", () => {
    // define a users directory at top where all users will be stored
    //const userDir = __dirname + "/users/";
    // OR using path module
    // make sure to require path module if using

    // captured data in stringified JSON format

    // check for post request coming on '/users'
    if (req.url === "/users" && req.method === "POST") {
      // grab the username from store data
      var dataform = JSON.parse(store).username;
      console.log(dataform);
      //var username = dataform.username;
      // check whether this username exists in users directory or not

      // We have to create a file using username + append .json to create a proper file

      // wx flag ensures that given username.json should not already exist in users directory, therwise throws an error

      fs.open(userDir + dataform + ".json", "wx", (err, fd) => {
        if (err) return console.log(err);
        // fd is pointing to newly created file inside users directory
        // once file is created, we.log can write content to file
        // since store has all the data of the user
        fs.writeFile(fd, store, (err) => {
          if (err) return console.log(err);
          // err indicated file was not written
          // if no error, file was written successfully
          // close the file
          fs.close(fd, (err) => {
            if (err) return console.log(err);
            // if no err, send response to client
            res.end(`${dataform} successfully created`);
          });
        });
      });
    }
  });

  if (parsedurl.pathname === "/users" && req.method === "GET") {
    console.log(parsedurl);
    var username = parsedurl.query.username;

    fs.readFile(userDir + username + ".json", (err, content) => {
      // send the user through response
      console.log(user, err);
      res.setHeader("Content-Type", "application/json");
      res.end(content);
    });
  }

  if (parsedurl.pathname === "/users" && req.method === "PUT") {
    console.log(parsedurl);
    var username = parsedurl.query.username;

    fs.readFile(userDir + username + ".json", "r+", (err, fd) => {
      if (err) return console.log(err);
      // send the user through response
      fs.truncate(fd, (err) => {
        if (err) return console.log(err);
        fs.writeFile(fd, store, (err) => {
          if (err) return console.log(err);
          fs.close(fd, () => {
            res.end(`${username} is successfully updated`);
          });
        });
      });
      res.end(content);
    });
  }
  if (parsedurl.pathname === "/users" && req.method === "DELETE") {
    console.log(parsedurl);
    var username = parsedurl.query.username;
    fs.unlink(userDir + username + ".json", (err) => {
      if (err) return console.log(err);
      res.end(`${username} is successfully delete`);
    });
  }
}

server.listen(3000, () => {
  console.log("Server listioning on th 3k port");
});
