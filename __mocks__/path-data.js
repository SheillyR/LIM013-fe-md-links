// __mocks__/fs.js

const path = require('path');
// Generates an automatic mock and overrides the default behaviour of the module.
const fs = jest.createMockFromModule('fs');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.

let mockFiles = Object.create(null);
const createMockFiles = (newMockFiles) => {
  mockFiles = Object.create(null);
  const array = [newMockFiles];
  array.forEach((element) => {
    const dir = path.dirname(Object.keys(element));
    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    return Object.values(mockFiles[dir].push(path.basename(Object.keys(element))));
  });
};

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via setMockFiles

const existsSync = (directoryPath) => mockFiles[directoryPath];

fs.createMockFiles = createMockFiles;
fs.existsSync = existsSync;

module.exports = fs;
