let fs = require("fs");

function contentReader(path) {
    return fs.readdirSync(path);
}

function checkIfFile(path) {
    return fs.lstatSync(path).isFile();
}

function printFlat(path) {
    let isFile = checkIfFile(path);
    if (isFile) {
        console.log(path + ".*");
    } else {
        console.log(path);
        let childrens = contentReader(path);
        for (let i = 0; i < childrens.length; i++) {
            printFlat(path + "\\" + childrens[i]);
        }
    }
}
printFlat("G:\\PAB-WEB\\Assignment1\\raw");