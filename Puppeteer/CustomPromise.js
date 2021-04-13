let fs = require("fs");
let filePath;
function myCustomPromise(filePath){
    return new Promise(function (resolve,reject){
        fs.readFile(filePath,function cb(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
let readFilePromise = myCustomPromise("a.txt");
console.log(readFilePromise);
readFilePromise.then(function(data){
    console.log(data+"");
} );