let fs = require("fs");
let path = require("path");

function treeFunc(dirPath){
    let destPath;
    if(dirPath===undefined){
        treeHelper(process.cwd()," ");
        return ;
    }
    else{
        let DoesExist=fs.existsSync(dirPath);
        if(DoesExist){
                treeHelper(dirPath," ");
        }
        else{
            console.log("Kindly Enter correct Path.");
        }
    }
}

function treeHelper(dirPath,indent){
    //is file or folder
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile){
        let filename=path.basename(dirPath);
        console.log(indent+ "├──" + filename)
    }
    else{
        let dirname=path.basename(dirPath);
        console.log(indent+ "└──" + dirname);
        let children=fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++){
            let childPath = path.join(dirPath, children[i]);
            treeHelper(childPath, indent + "\t");
        }

    }
}

module.exports={
    treeKey: treeFunc
};