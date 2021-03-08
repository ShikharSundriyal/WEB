let fs = require("fs")
// let arr = ["C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\activity\\commands\\help.js","C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\activity\\commands\\organize.js"];
function displayFiles(paths){
    for(let i = 0; i < paths.length; i++){
        let path = paths[i];
        let data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
        console.log(data)
    }
}
module.exports={
    fn:displayFiles
}