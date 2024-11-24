const fs = require("fs");
const readLine = require("readline");

let inputArr = process.argv.slice(3);

function displayContent() {
  try {
    let filePaths = [];
    let i = 0;

    while (i < inputArr.length) {
      let value = inputArr[i];

      if (value.startsWith("--")) {
        i++;
        continue;
      }
      try {
        if (fs.lstatSync(value).isFile()) {
          filePaths.push(value);
        }
      } catch (e) {
        let path = value;
        let j = i + 1;

        while (j < inputArr.length) {
          path = path + " " + inputArr[j];
          try {
            if (fs.lstatSync(path).isFile()) {
              filePaths.push(path);
              i = j;
              break;
            }
          } catch (e) {
            console.log(e);
          }

          j++;
        }
      }
      i++;
    }
    filePaths.forEach((filePath) => {
      try {
        if (fs.lstatSync(filePath).isFile()) {
          readFile(filePath);
        }
      } catch (e) {
        console.log(`${filePath} is not a file`);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function readFile(filePath) {
  const fileReadStream = fs.createReadStream(filePath);

  const readLineObj = readLine.createInterface({
    input: fileReadStream,
    crlfDelay: Infinity,
  });

  let index = 1;
  readLineObj.on("line", (line) => {
    if (line.trim().length !== 0) {
      console.log(`${index} ${line}\n`);
      index++;
    }
  });
}
module.exports = {
  displayContent,
};
