const fs = require('fs');
const absPath = require('./absolute-path.js');

// It returns a Stats object which contains the details of the file path.
// Getting information for a directory, return a boolean value.
const isDirectory = (inputPath) => fs.statSync(inputPath).isDirectory();

// Function to get current filenames in directory
const filenames = (inputPath) => fs.readdirSync(inputPath);

const readDir = (inputPath) => {
  const absolutePathOutput = absPath.verifyAbsolutePath(inputPath);
  console.log(absolutePathOutput);
  const isDirectoryBoleean = isDirectory(absolutePathOutput);
  console.log(isDirectoryBoleean);
  if (isDirectoryBoleean === true) {
    const fileNames = filenames(absolutePathOutput);
    console.log(absolutePathOutput);
    /*
    if (fileNames.length === 0) {
      return;
    }
    */
    console.log(fileNames);
    fileNames.forEach((element) => {
      console.log(element);
      // readDir(element);
    });
  }
};

module.exports = {
  isDirectory,
  readDir,
};
