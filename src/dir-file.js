const fs = require('fs');
const mdLinks = require('./absolute-path.js');

const isDirectory = (path1) => {
  const absolutePathOutput = mdLinks.absolutePath(path1);
  // It returns a Stats object which contains the details of the file path.
  const statsObj = fs.statSync(absolutePathOutput);
  console.log(statsObj);
  // Getting information for a directory, return a boolean value.
  const isDirectoryBoleean = statsObj.isDirectory(absolutePathOutput);
  console.log(isDirectoryBoleean);
  return isDirectoryBoleean;
};

/*
const mdFile = (inputPath) => {

};
*/
exports.isDirectory = isDirectory;
