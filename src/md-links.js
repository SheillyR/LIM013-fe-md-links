const fs = require('fs');
const path = require('path');

const pathExists = (inputPath) => {
  console.log(inputPath);
  if (fs.existsSync(inputPath)) {
    console.log(fs.existsSync(inputPath));
    console.log('Path exists.');
    return true;
  }
  console.log(fs.existsSync(inputPath));
  console.log('Path not found.');
  return false;
};

const convertToAbsolutePath = (inputPath) => {
  console.log('Convert to an absolute path.');
  const absolutePathResolve = path.resolve(inputPath);
  console.log(absolutePathResolve);
  return absolutePathResolve;
};

const absolutePath = (path1) => {
  const inputPath = path.normalize(path1);
  if (pathExists(inputPath) === true) {
    if (path.isAbsolute(inputPath)) {
      console.log('Path is absolute.');
      console.log(inputPath);
      return inputPath;
    }
    console.log('Path is not absolute');
    convertToAbsolutePath(inputPath);
  }
};

exports.absolutePath = absolutePath;
