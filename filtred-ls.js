var fs = require("fs");
const { extname } = require("path");

console.log("Going to read directory /tmp");
fs.readdir("D:/BACKEND/CP1 BACK",function(err, files) {
   if (err) {
      return console.error(err);
   }
  var result=files.filter( file=>extname(file)==='.js');
   console.log(result);
});