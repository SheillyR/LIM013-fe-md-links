const fs = require('fs');
const path = require('path');
const absPath = require('./absolute-path.js');

// It returns a Stats object which contains the details of the file path.
// Getting information for a directory, return a boolean value.
const isDirectory = (inputPath) => fs.statSync(inputPath).isDirectory();

const readDir = (inputPath) => {
  const absolutePathOutput = absPath.verifyAbsolutePath(inputPath);
  const isDirectoryBoolean = isDirectory(absolutePathOutput);
  let arrayOfPaths = [];
  if (isDirectoryBoolean) {
    // Function to get current filenames in directory
    const fileNames = fs.readdirSync(absolutePathOutput);
    fileNames.forEach((element) => {
      const newPath = path.join(absolutePathOutput, element);
      arrayOfPaths = arrayOfPaths.concat(readDir(newPath));
    });
  } else {
    arrayOfPaths.push(absolutePathOutput);
  }
  // console.log(arrayOfPaths);
  return arrayOfPaths;
};

module.exports = {
  isDirectory,
  readDir,
};
