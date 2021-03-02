let fs = require("fs");

function contentReader(path) {
    return fs.readdirSync(path);
}

function checkIfFile(path) {
    return fs.lstatSync(path).isFile();
}

function printTree(path) {
    let isFile = checkIfFile(path);
    if (isFile) {
        console.log(path + ".*");
    } else {
        console.log(path);
        let childrens = contentReader(path);
        for (let i = 0; i < childrens.length; i++) {
            printTree(path + "\\" + childrens[i]);
        }
    }
}
printTree("G:\\PAB-WEB\\Assignment1\\raw");