const path = require('path');
const dir = require('./dir.js');

const mdLinks = (inputPath) => {
  const arrayOfPathsFiles = dir.readDir(inputPath);
  // console.log(arrayOfPathsFiles);
  // Get current filenames with specific extension.
  // console.log("\Filenames with the .md extension:");
  const mdFiles = [];
  arrayOfPathsFiles.forEach((file) => {
    if (path.extname(file) === '.md') {
      console.log(file);
      mdFiles.push(file);
      console.log(mdFiles);
      return mdFiles;
    }
    console.log('no files with extension .md');
  });
};

exports.mdLinks = mdLinks;
