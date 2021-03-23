let fs = require("fs");

console.log("before");
let prom = fs.promises.readFile("C:\\Users\\Shikhar\\Desktop\\git\\WEB\\.gitignore");
prom.then(function (content){
    console.log(content+"");
})
prom.catch(function (err){
    console.log(err);
})
console.log("After")