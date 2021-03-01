let input = process.argv.slice(2);
let fs = require("fs");
let path = require("path");

function isFile(dir){
    //returns true or false
    return fs.lstatSync(dir).isFile();
}
function getContent(dir){
    //returns an array of string
    return fs.readdirSync(dir);
}

function viewTree(src, indent){

    let isfile = isFile(src);
    if(isfile){
        console.log(indent,path.basename(src));
    }else{
        console.log(indent,path.basename(src));
        let fDirnames = getContent(src);

        for(let i=0; i<fDirnames.length; i++){
            let child = fDirnames[i];
            let dirNamepath = path.join(src,child);
            viewTree(dirNamepath,indent+"\t");
        }
    }
}
viewTree(input[0],"")