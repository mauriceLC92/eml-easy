var fs = require('fs');
var emlformat = require('eml-format');

var eml = fs.readFileSync("simple.eml", "utf-8");
console.log(eml);
emlformat.read(eml, function (error, data) {
  if (error) return console.log(error);
  // fs.writeFileSync("sample.json", JSON.stringify(data, " ", 2));
  console.log(data.html);
});
