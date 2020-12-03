const fs = require('fs');
const path = require('path');
const absPath = require('./absolute-path.js');

// It returns a Stats object which contains the details of the file path.
// Getting information for a directory, return a boolean value.
const isDirectory = (inputPath) => fs.statSync(inputPath).isDirectory();

const readDir = (inputPath) => {
  const absolutePathOutput = absPath.verifyAbsolutePath(inputPath);
  // console.log(absolutePathOutput);
  const isDirectoryBoolean = isDirectory(absolutePathOutput);
  let array = [];
  // console.log(isDirectoryBoolean);
  if (isDirectoryBoolean) {
    // Function to get current filenames in directory
    const fileNames = fs.readdirSync(absolutePathOutput);
    // console.log(absolutePathOutput);
    // console.log(fileNames);
    fileNames.forEach((element) => {
      // console.log(element);
      const newPath = path.join(absolutePathOutput, element);
      // console.log(newPath);
      array = [].concat(readDir(newPath));
    });
  } else {
    array.push(absolutePathOutput);
  }
  // console.log(array);
  return array;
};

module.exports = {
  isDirectory,
  readDir,
};
