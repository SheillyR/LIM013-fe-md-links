// __mocks__/fs.js

const path = require('path');
// Generates an automatic mock and overrides the default behaviour of the module.
const fs = jest.createMockFromModule('fs');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.

let mockFiles = Object.create(null);
const setMockFiles = (newMockFiles) => {
  mockFiles = Object.create(null);
  const array = [newMockFiles];
  array.forEach((element) => {
    const dir = path.dirname(Object.keys(element));
    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(dir);
  });
};

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via setMockFiles

const readdirSync = (directoryPath) => mockFiles[directoryPath] || [];

fs.setMockFiles = setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;
