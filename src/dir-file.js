const fs = require('fs');
const absPath = require('./absolute-path.js');

const readDir = (inputPath) => {
  const verifyAbsolutePathOutput = absPath.verifyAbsolutePath(inputPath);
  // console.log(verifyAbsolutePathOutput);
  // Function to get current filenames in directory
  const fileNames = fs.readdirSync(verifyAbsolutePathOutput);
  // console.log(verifyAbsolutePathOutput);
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
};

// It returns a Stats object which contains the details of the file path.
// Getting information for a directory, return a boolean value.

const isDirectory = (inputPath) => (fs.statSync(inputPath).isDirectory()
  ? readDir(inputPath) : console.log('mdlinks'));

module.exports = {
  readDir,
  isDirectory,
};
