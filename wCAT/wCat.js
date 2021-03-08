let display = require("./commands/readFile");
let displayFilesWithoutLineBreaks = require("./commands/displayWithoutLineBreaks");
let displayFileWithLineNumber = require("./commands/displayFileWithLineNumber");
let copyFile = require("./commands/copyFile");
let option = process.argv.slice(2);
let files = process.argv.slice(3);
console.log("options : ",option);
if(process.argv.includes(">") || process.argv.includes(">>")){
    switch(option[1]){
        case">":
            let dest = option[2];
            if(dest != undefined){
                console.log("Copying files : ");
                copyFile.fn(option[0],dest);
            //put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist
            }else{
                console.log("destination path missing ")
            }
            break;
        case">>":
            if(option[2] != undefined){
                console.log("Copying/Appending to file : ");
                copyFile.fn1(option[0],option[2]);
            }else{
                console.log("destination path missing ")
            }
            break;
        default:
            console.log("Incorrect option selected");
    }
}else{
    switch(option[0]){
        case "-b":
            console.log("diplaying file with line numbers for non-empty lines :");
            displayFileWithLineNumber.fn1(option[1]);
            break;
        case "-s":
            console.log("displaying files with big line breaks removal : ")
            displayFilesWithoutLineBreaks.fn(option[1])
            break;
        case "-n":
            console.log("diplaying file with line numbers : ");
            displayFileWithLineNumber.fn(option[1]);
            break;
        default:
            console.log("default option displaying : ");
            display.fn(option);

    }
}


