const dir = require('../src/read-dir.js');

const arrayOfPaths = [
  'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test\\absolute-path.spec.js',
  'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test\\options.spec.js',
  'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test\\read-dir.spec.js',
];

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

describe('dir.readDir', () => {
  test('should be a function', () => {
    expect(typeof dir.readDir).toBe('function');
  });

  test('should return the directory paths in an array', () => {
    expect(dir.readDir(__dirname)).toEqual(arrayOfPaths);
  });

  test('should return the file paths in an array', () => {
    expect(dir.readDir(__filename)).toEqual([arrayOfPaths[2]]);
  });
});
