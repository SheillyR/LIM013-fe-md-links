const fs = require('fs');
const path = require('path');

const pathExists = (path1) => {
  const inputPath = path.normalize(path1);
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

exports.pathExists = pathExists;
