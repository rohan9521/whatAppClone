let utils   = require('./Utility.js');
let path    = require('path')
let fs      = require('fs')
function organize(dirPath) {
    if (dirPath == undefined)
        dirPath = process.cwd()

    let organizeDirPath = path.join(dirPath, 'Organized Folder')
    if (!fs.existsSync(organizeDirPath)) {
        fs.mkdirSync(organizeDirPath)
    } else { }
    // throw 'Organised folder already exists'

    organiseFilesHelper(dirPath, organizeDirPath)

}

function organiseFilesHelper(src, dest) {
    let childNames = fs.readdirSync(src)
    childNames.forEach(child => {
        let childPath = path.join(src, child)
        let isFile = fs.lstatSync(childPath).isFile()
        if (isFile) {
            moveFile(childPath, dest, child);
        }
       
    })
}

function moveFile(childPath, dest, child) {
    let category = findCategory(childPath);

    if (category != undefined) {
        let categoryPath = path.join(dest, category);

        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath);
        }
        let basename = path.basename(child);
        let destPath = path.join(categoryPath, basename);
        fs.renameSync(childPath, destPath);
    }
}

function findCategory(file) {
    categoryFound = ""
    for (category in utils.types) {

        utils.types[category].forEach(extention => {
         
            if (path.extname(file).slice(1) === extention){
               // console.log(extention ,path.extname(file).slice(1))
                categoryFound =  category
                return 
            }
        })
    }
   return categoryFound
}

module.exports = {
    organize:organize
}