const dir = require('../src/dir.js');

describe('dir.isDirectory', () => {
  test('should be a function', () => {
    expect(typeof dir.isDirectory).toBe('function');
  });

  test('should return a true value for a directory', () => {
    expect(dir.isDirectory(__dirname)).toBe(true);
  });

  test('should return a false value for a file', () => {
    expect(dir.isDirectory(__filename)).toBe(false);
  });
});
