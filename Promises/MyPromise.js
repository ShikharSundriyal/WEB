const fs = require("fs");

function MyFileReadPromise(path){
    // returns a Pending promise, the cb function is called by the Promise class
    return new Promise(cb);
    // this cb is not a async function 
    // Doubt : How is cb getting called as in Promise we are just passing the function not calling it.
    // Answer : The cb is getting called by the Promise
    function cb(resolve,reject){
        console.log("Hello");
        fs.readFile(path,function (err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
        console.log("Hello After");
    }
}
let fRP = MyFileReadPromise("f1.txt"); // initially frp undefined 
console.log(fRP);
setTimeout(function (){
    console.log(fRP);
},1000);
