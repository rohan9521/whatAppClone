#!/usr/bin/env node

let tree = require("./Tree.js");
let organize = require("./Organize.js");
let help = require("./Help.js");
let wcat = require("./wcat.js");

// List of Commands
// 1. tree -> displays hierarchical struture of files and folder.
// 2. organize -> creates a folder Named 'Organised Folder'.
// 3. help -> displays list of commands and there use.

let input = process.argv.slice(2);
// node(0) filesytem.js (1) that's why 2
//console.log(input)

let command = input[0];
let dirpath = input[1];
try {
  switch (command) {
    case "tree":
      tree.treeHelper(dirpath);
      break;
    case "organize":
      organize.organize(dirpath);
      break;
    case "help":
      help.help();
      break;
    case "wcat":
      wcat.displayContent();
      break;

    default:
      throw "Command Unkown";
  }
} catch (err) {
  console.log(err);
}
