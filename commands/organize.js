let fs = require("fs");
let path = require("path");

function organizeFunc(dirPath){
    //1. input -> directory path given
    let destPath;
    if(dirPath===undefined){
        destPath=process.cwd();
        return ;
    }
    else{
        let DoesExist=fs.existsSync(dirPath);
        if(DoesExist){
            //2. create -> organized_files -> directory
            destPath=path.join(dirPath,"Organized_files");
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("Kindly Enter correct Path.");
        }
    }
    organizeHelper(dirPath,destPath);
}

function organizeHelper(src,dest){
    //3. identify categories of all files present in the input directory
    let childNames=fs.readdirSync(src);
    console.log(childNames);
    for(let i=0;i<childNames.length;i++){
        let childAddress=path.join(src,childNames[i]);
        let isFile=fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            let category=getCategory(childNames[i]);
            console.log(childNames[i],"belongs to --> ",category)
            //4. copy/cut files to that directory inside of any of category folder.
            sendFiles(childAddress,dest,category);
        }
    }
}

function getCategory(name){
    let ext=path.extname(name);
    ext=ext.slice(1);
    // console.log(ext);
    for(let type in types){
        let cTypeArray=types[type];
        for (let i=0;i<cTypeArray.length;i++){
            if(ext==cTypeArray[i])
            return type;
        }
    }
    return "others";
}

function sendFiles(src,dest,category){
    let categorypath=path.join(dest,category);
    if(!fs.existsSync(categorypath)){
        fs.mkdirSync(categorypath);
    }
    // copy krne ke liye -> same name ki file bnayenge then data src se copy kr denge new file dest mei jo bni hai vahan.
    let filename=path.basename(src);
    let destination=path.join(categorypath,filename);
    fs.copyFileSync(src,destination);
    console.log(filename , "copied to ", category);
}

module.exports={
    organizeKey: organizeFunc
};