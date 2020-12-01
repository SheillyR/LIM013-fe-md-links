const fs = require('fs');
const path = require('path');

const pathNormalize = (inputPath) => path.normalize(inputPath);

const pathExists = (inputPath) => fs.existsSync(inputPath);

const pathIsAbsolute = (inputPath) => path.isAbsolute(inputPath);

const convertToAbsolutePath = (inputPath) => path.resolve(inputPath);

const absolutePath = (path1) => {
  if (!path1) throw Error('path1 cannot be empty');
  const inputPath = pathNormalize(path1);
  let outputPath;
  if (pathExists(inputPath) === true) {
    if (pathIsAbsolute(inputPath) === true) {
      outputPath = inputPath;
    } else {
      outputPath = convertToAbsolutePath(inputPath);
    }
    return outputPath;
  }
  throw Error('Path not found');
};

module.exports = {
  pathNormalize,
  pathExists,
  pathIsAbsolute,
  convertToAbsolutePath,
  absolutePath,
};
