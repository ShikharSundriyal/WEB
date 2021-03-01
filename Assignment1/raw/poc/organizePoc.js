let path = require("path");
let fs = require("fs");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

// let dirname = process.argv.slice(2);

function isFile(dir){
    //returns true or false
    return fs.lstatSync(dir).isFile();
}
function getContent(dir){
    //returns an array of string
    return fs.readdirSync(dir);
}
function organizeFiles(src){
    //
    let folderToMake = path.join(src,"Organized_files");
    if (!fs.existsSync(folderToMake)){
        fs.mkdirSync(folderToMake);
    }
    organize(src,folderToMake);
}
function checkExtension(src){
    let extension = src.split(".").pop();
    for(let type in types){
        for(let i=0;i<types[type].length;i++){
            if(extension == types[type][i]){
                return type;
            }
        }
    }
    return "others";
}
function sendFile(src, dest,folderName){
    let folderToMake = path.join(dest,folderName);
    if(!fs.existsSync(folderToMake)){
        fs.mkdirSync(folderToMake);
    }
    let pathofdestFile = path.join(folderToMake,path.basename(src));
    console.log(src+" -> "+pathofdestFile)
    fs.copyFileSync(src,pathofdestFile);
}
function organize(src, dest){
    //content read
    if(isFile(src)){
        let folderName = checkExtension(src);
        sendFile(src,dest,folderName);
    }else{
        let fDirnames = getContent(src);
        for(let i=0; i<fDirnames.length; i++){
            let child = fDirnames[i];
            let dirNamepath = path.join(src,child);
            organize(dirNamepath,dest);
        }
    }
}
organizeFiles(process.argv[2]);