var http = require("http");
var server = http.createServer(handleRequest);
var fs = require("fs");
var qs = require("querystring");
var path = require("path");
function handleRequest(req, res) {
  var store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });

  req.on("end", () => {
    // define a users directory at top where all users will be stored
    //const userDir = __dirname + "/users/";
    // OR using path module
    // make sure to require path module if using
    const userDir = path.join(__dirname, "users/");

    // captured data in stringified JSON format

    // check for post request coming on '/users'
    if (req.url === "/users" && req.method === "POST") {
      // grab the username from store data
      var dataform = qs.parse(store);
      var username = dataform.username;
      // check whether this username exists in users directory or not

      // We have to create a file using username + append .json to create a proper file

      // wx flag ensures that given username.json should not already exist in users directory, therwise throws an error

      fs.open(userDir + username + ".json", "wx", (err, fd) => {
        // fd is pointing to newly created file inside users directory
        // once file is created, we can write content to file
        // since store has all the data of the user
        fs.writeFile(fd, store, (err) => {
          // err indicated file was not written
          // if no error, file was written successfully
          // close the file
          fs.close(fd, (err) => {
            // if no err, send response to client
            res.end(`${username} successfully created`);
          });
        });
      });
    }
  });

  if (req.url === "/users" && req.method === "GET") {
     
    fs.readFile('./users/akash.json', (err, user) => {
        // send the user through response
        console.log(user);
        res.end(user)
      });
  }
}

server.listen(3000, () => {
  console.log("Server listioning on th 3k port");
});
