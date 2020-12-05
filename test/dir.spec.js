jest.mock('fs');
const fs = require('fs');
const dir = require('../src/dir.js');

describe('dir.readDir', () => {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    fs.__setMockFiles(MOCK_FILE_INFO);
  });

  test('includes all files in the directory in the summary', () => {
    const readDirectory = dir.readDir(
      '/path/to',
    );

    expect(readDirectory.length).toHaveLength(2);
  });
});
