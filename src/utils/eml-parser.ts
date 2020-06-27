// import fs from 'fs';
const emlformat = require('eml-format');

// const eml = fs.readFileSync("sample.eml", "utf-8");


export const readEmlFile = (input: any) => {
  emlformat.read(input, function (error: any, data: any) {
    if (error) return console.log(error);
    console.log('data ', data.subject);
    console.log('data ', data.html);
    console.log('data ', data);
    return data.html;
  });
  // return htmlData;
}
