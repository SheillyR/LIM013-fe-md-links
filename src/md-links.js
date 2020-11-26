const fs = require('fs');
const path = require('path');

const pathExists = (inputPath) => {
  console.log(inputPath);
  const booleanPathExists = fs.existsSync(inputPath);
  console.log(booleanPathExists);
  return booleanPathExists;
};

const pathIsAbsolute = (inputPath) => {
  const booleanAbsolutePath = path.isAbsolute(inputPath);
  console.log(booleanAbsolutePath);
  return booleanAbsolutePath;
};

const convertToAbsolutePath = (inputPath) => {
  console.log('Convert to an absolute path.');
  const resolveAbsolutePath = path.resolve(inputPath);
  console.log(resolveAbsolutePath);
  return resolveAbsolutePath;
};

const absolutePath = (path1) => {
  const inputPath = path.normalize(path1);
  let outputPath;
  if (pathExists(inputPath) === true) {
    if (pathIsAbsolute(inputPath) === true) {
      console.log('Path is absolute.');
      console.log(inputPath);
      outputPath = inputPath;
    } else {
      console.log('Path is not absolute');
      outputPath = convertToAbsolutePath(inputPath);
    }
  }
  return outputPath;
};

exports.absolutePath = absolutePath;
