const fs = require("fs");
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
          // const data = fs.readFileSync(filePath, "utf8");
          // console.log(data);
          fs.readFile(filePath, (err, data) => {
            if (err) {
              console.log({ err });
            }
            console.log(data);
          });
        }
      } catch (e) {
        console.log(`${filePath} is not a file`);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  displayContent,
};
