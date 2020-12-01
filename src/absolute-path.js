const fs = require('fs');
const path = require('path');

const convertToAbsolutePath = (inputPath) => (path.isAbsolute(inputPath)
  ? inputPath : path.resolve(inputPath));

const verifyAbsolutePath = (inputPath) => {
  if (!inputPath) throw Error('path1 cannot be empty');
  const pathNormalize = path.normalize(inputPath);
  if (fs.existsSync(pathNormalize)) {
    return convertToAbsolutePath(pathNormalize);
  }
  throw Error('Path not found');
};

module.exports = {
  convertToAbsolutePath,
  verifyAbsolutePath,
};
