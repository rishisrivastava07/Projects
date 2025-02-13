/** 
 * Node.js
 * Javascript Runtime Environment
 * It is used for server side programming
 * 
 * note - Node.js is not a language, library or framework
 */

/**
 * Node REPL -
 * R - Read
 * E - Evaluate
 * P - Print
 * L - Loop
 * 
 * .help gives us commands
 * global is equivalent to window object because here DOM cannot be accessible
 * .exit or Ctrl+C - (2 times) to exit the node environment.
 * we can run the node.js files using the command line
 * we must be present in the particular directory where the file is present
 * we can type node filename.js
 */

// let n = 5;

// for(let i=0; i < n; i++){
//     console.log("hello ", i);
// }


/**
 * Process - 
 * process - This object provides information about, and control over, the current Node.js process.
 * process.argv - returns an array containing the command line arguments passed when the Node.js process was launched.
 * the first two lines in the console.log(process.argv) are - 
 * line 1 - executable path for node 
 * line 2 - current directory for the node
 */

// console.log("bye");
// let args = process.argv;

// for(let i = 2; i < args.length; i++){
//     console.log("hello to ",args[i]);
// }


/**
 * module.exports - 
 * A. requiring files -
 *      i. require() - a built in function to include external modules that exist in separate files.
 *      ii. module.exports - a special object
 * B. requiring directories - 
 */

// We can only use it when it is present in same directory.
// const math = require("./math");
// console.log(math.sum(2,3));
// console.log(math.PI);

// const fruits = require("./Fruits");

// console.log(fruits);

/**
 * NPM - Node Package Manager - npm is the standard package manager for Node.js
 * library of packages - developed by many developers
 * command line tool
 * Installing packages - 
 * npm install <package-name>
 * node_modules - the node_modules folder contains every installed dependency for your project.
 * package-lock.json - It records the exact version of every installed dependency, including its sub-dependencies and their versions.
 * package.json - The package.json file contains descriptive and functional metadata about a project, such as a name version, and dependencies.
 * command to create package.json file - npm init
 */

/**
 * Local v/s Global
 * 
 * npm install -g <-package name->
 * npm link <-package name->
 * 
 * best practise is to install the npm packages locally not globally
 */

// const figlet = require("figlet");

// figlet("Suman", function(err,data){
//     if(err){
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


/**
 * require v/s import
 * import{sum} from "./math.js"
 * 
 * We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
 * Loading is synchronous for 'require but can be asynchronous for 'import'.
 */

import {sum,PI} from "./math.js";
/* After exporting from math.js we need to add type: module in package.json */

import {generate} from "random-words";
// console.log(sum(1,2));
// console.log(PI);

console.log(generate());