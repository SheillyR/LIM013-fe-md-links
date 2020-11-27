const { error } = require('console');
const fs = require('fs');
const path = require('path');

const pathNormalize = (inputPath) => {
  // console.log(inputPath);
  const pathNormalizeOutput = path.normalize(inputPath);
  // console.log(pathNormalizeOutput);
  return pathNormalizeOutput;
};

const pathExists = (inputPath) => {
  // console.log(inputPath);
  const pathExistsBoolean = fs.existsSync(inputPath);
  // console.log(pathExistsBoolean);
  return pathExistsBoolean;
};

const pathIsAbsolute = (inputPath) => {
  const absolutePathBoolean = path.isAbsolute(inputPath);
  // console.log(absolutePathBoolean);
  return absolutePathBoolean;
};

const convertToAbsolutePath = (inputPath) => {
  // console.log('Convert to an absolute path.');
  const resolveAbsolutePath = path.resolve(inputPath);
  // console.log(resolveAbsolutePath);
  return resolveAbsolutePath;
};

const absolutePath = (path1) => {
  if (!path1) throw Error('path1 cannot be empty');
  const inputPath = pathNormalize(path1);
  let outputPath;
  if (pathExists(inputPath) === true) {
    if (pathIsAbsolute(inputPath) === true) {
      // console.log('Path is absolute.');
      // console.log(inputPath);
      outputPath = inputPath;
    } else {
      // console.log('Path is not absolute');
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
