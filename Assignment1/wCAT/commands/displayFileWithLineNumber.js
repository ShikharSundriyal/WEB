let fs = require("fs")

function displayFileWithLineNumber(path){
    
        let i = 1;
        let data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
        data = data.split(/\r?\n/);
        data.forEach(line => {
            console.log(i,line);
            i++
        });
    
}

function displayNumberingNonEmptyLines(path){
    
    let i = 1;
    let data = fs.readFileSync(path, {encoding:'utf8', flag:'r'});
    data = data.split(/\r?\n/);
    data.forEach(line => {
        if(line.length > 0){
            console.log(i,line);
            i++
        }else{
            console.log(line);
        }
        
    });

}

//displayNumberingNonEmptyLines("C:\\Users\\Shikhar\\Desktop\\git\\WEB\\Assignment1\\activity\\commands\\help.js");
module.exports={
    fn:displayFileWithLineNumber,
    fn1:displayNumberingNonEmptyLines
}