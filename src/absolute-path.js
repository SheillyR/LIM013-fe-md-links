const fs = require('fs');
const path = require('path');

const convertToAbsolutePath = (inputPath) => (path.isAbsolute(inputPath)
  ? inputPath : path.resolve(inputPath));

const verifyAbsolutePath = (inputPath) => {
  if (!inputPath) throw Error('argument cannot be empty');
  const normalizePath = path.normalize(inputPath);
  if (fs.existsSync(normalizePath)) {
    return convertToAbsolutePath(normalizePath);
  }
  throw Error('Path not found');
};

module.exports = {
  convertToAbsolutePath,
  verifyAbsolutePath,
};
