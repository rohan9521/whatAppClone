let fs      = require('fs')
let path    = require('path')
function treeHelper(dirPath){
    if(dirPath == undefined) dirPath = process.cwd()

    if(!fs.existsSync(dirPath)) throw "Path doesnt exist"

    showTree(dirPath,'\t')
    
}

function showTree(dirpath,space){
    console.log(space+`|__` + path.basename(dirpath))

    let isFile = fs.lstatSync(dirpath).isFile()
    if(isFile) return 

    let isDirectory = fs.lstatSync(dirpath).isDirectory()
    if(!isDirectory) return 
   
    let childItems = fs.readdirSync(dirpath)

   childItems.forEach((child)=>{
        let childPath = path.join(dirpath,child)
        showTree(childPath,space+'\t')
    })
}
module.exports = {
    treeHelper : treeHelper
}