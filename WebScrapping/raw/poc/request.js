let request = require("request");
let cheerio = require("cheerio")
console.log("before");
request("https://www.google.com/",cb);
function cb(error,response,body){
    //response -> contains the html + the header 
    // console.log(body);
    let $ = cheerio.load(body);
    let element = $("#SIvCob");
    console.log(element.text());

}
console.log("after")
//output -> before,after,then html body