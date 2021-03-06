function viewHelper(dirname, mode){
    if(mode == "tree"){
        console.log("tree view will be shown for ",dirname);
        viewTree(dirname,"");
    }else if(mode == "flat"){
        console.log("flat structure will be shown for",dirname);
        viewFlat(dirname);
    }
}

let fs = require("fs");
let path = require("path")

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
function viewFlat(dirname){
    let isfile = isFile(dirname);
    if(isfile){
        console.log(dirname);
    }else{
        console.log(dirname);
        let contents = getContent(dirname);
        for(let i = 0;i<contents.length;i++){
            let child = contents[i];
            let dirPath = dirname+"\\"+child;
            viewFlat(dirPath);
        }
    }
}
module.exports = {
    fn:viewHelper
}