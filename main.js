#!/usr/bin/env node

let inputArr=process.argv.slice(2);
let types = {
    media: ["mp4", "mkv", "mp3","wav"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "txt","csv"],
    apps: ["exe", "dmg", "pkg", "deb"],
    images: ["png", "jpg", "jpeg", "gif"],
    pyhtonfiles: ["py","ipynb"]
};

let HelpObj=require("./commands/help.js");
let treeObj=require("./commands/tree.js");
let organizeObj=require("./commands/organize.js");

// console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help

let command=inputArr[0];
switch (command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1])
        break;
    case "help":
        HelpObj.helpKey();
        break;
    default:
        console.log("Please Provide correct Input command");
        break;
}




