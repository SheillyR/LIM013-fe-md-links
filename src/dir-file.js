const fs = require('fs');
const absPath = require('./absolute-path.js');

// It returns a Stats object which contains the details of the file path.
const statsObj = (inputPath) => fs.statSync(inputPath);

// Getting information for a directory, return a boolean value.
const isDirectory = (inputPath) => fs.statSync(inputPath).isDirectory();

// Function to get current filenames in directory
const filenames = (inputPath) => fs.readdirSync(inputPath);

const readDir = (inputPath) => {
  const absolutePathOutput = absPath.absolutePath(inputPath);
  console.log(absolutePathOutput);
  const statsObject = statsObj(absolutePathOutput);
  console.log(statsObject);
  const isDirectoryBoleean = isDirectory(absolutePathOutput, statsObject);
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

// Base case
/*
const mdFile = (inputPath) => {

};
*/
module.exports = {
  statsObj,
  isDirectory,
  readDir,
};
