let fs = require("fs")
//let arr = ["C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\activity\\commands\\help.js","C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\activity\\commands\\organize.js"];
function displayFilesWithoutLineBreaks(path){
    
    let data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
    data = data.replace(/[\r\n]{2,}/g, "\n");
    console.log(data);
    
}

//displayFilesWithoutLineBreaks(arr);
module.exports={
    fn:displayFilesWithoutLineBreaks
}