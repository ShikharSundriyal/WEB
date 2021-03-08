let fs = require("fs");
let path = require("path");
function sendFile(src, dest){
    let arr = dest.split("\\");
    arr.pop();
    let folderToMake = arr.join("\\");
    console.log(folderToMake);
    if(!fs.existsSync(folderToMake)){
        fs.mkdirSync(folderToMake);
    }
    let pathofdestFile = path.join(dest);
    fs.copyFileSync(src,pathofdestFile);
}

function sendFileAppend(src, dest){
    let arr = dest.split("\\");
    arr.pop();
    let folderToMake = arr.join("\\");
    console.log(folderToMake);
    if(!fs.existsSync(folderToMake)){
        fs.mkdirSync(folderToMake);
    }
    let srcData = fs.readFileSync(src, "utf8");

    let pathofdestFile = path.join(dest);
    fs.appendFileSync(pathofdestFile,srcData);
}

module.exports = {
    fn:sendFile,
    fn1:sendFileAppend
}

// sendFileAppend(
//     "C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\wCAT\\commands\\displayFileWithLineNumber.js",
//     "C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\wCAT\\commands1\\displayFileWithLineNumber.js")