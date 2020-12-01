const fs = require('fs');
const absPath = require('./absolute-path.js');

// It returns a Stats object which contains the details of the file path.
const statsObj = (inputPath) => fs.statSync(inputPath);

// Getting information for a directory, return a boolean value.
const isDirectory = (inputPath, statsObject) => statsObject.isDirectory(inputPath);

const readDir = (inputPath) => {
  const absolutePathOutput = absPath.absolutePath(inputPath);
  // console.log(absolutePathOutput);
  const statsObject = statsObj(absolutePathOutput);
  // console.log(statsObject);
  const isDirectoryBoleean = isDirectory(absolutePathOutput, statsObject);
  // console.log(isDirectoryBoleean);
  if (isDirectoryBoleean === true) {
    const filenames = fs.readdirSync(absolutePathOutput);
    console.log(filenames);
    console.log(filenames[0]);
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
