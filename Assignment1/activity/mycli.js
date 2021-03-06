#! /usr/bin/env node
let helperFile = require("./commands/help");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");

//process.cwd() -> gets the path from where the program was calles
//__filename -> the full file path of the mycli.js
//__dirname -> the dir where the mycli.js is present

let input = process.argv.slice(2);
let command = input[0];
//path to acquire the object from other file
switch(command){
    case "view":
        viewFile.fn(input[1],input[2]);
        break;
    case "help":
        helperFile.fn();
        break;
    case "organize":
        let pathToOrganize = input[1];
        if(pathToOrganize == undefined){
            pathToOrganize = process.cwd();
        }
        console.log("Organizing the folders in path :",pathToOrganize);
        organizeFile.fn(pathToOrganize); 
        break;
    default:
        console.log("Invalid command");
        break;
}