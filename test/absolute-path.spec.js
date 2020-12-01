const absPath = require('../src/absolute-path');

// absPath.convertToAbsolutePath function test

describe('absPath.convertToAbsolutePath', () => {
  it('should be a function', () => {
    expect(typeof absPath.convertToAbsolutePath).toBe('function');
  });

  it('should return the same absolute path', () => {
    expect(absPath.convertToAbsolutePath('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });

  it('should return the absolute path of the relative path package.json', () => {
    expect(absPath.convertToAbsolutePath('package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });
});

// absPath.verifyAbsolutePath function test

describe('absPath.verifyAbsolutePath', () => {
  it('should be a function', () => {
    expect(typeof absPath.verifyAbsolutePath).toBe('function');
  });

  it('should throw an error if called without an argument', () => {
    expect(() => {
      absPath.verifyAbsolutePath();
    }).toThrow('path1 cannot be empty');
  });

  it('should return the same absolute path', () => {
    expect(absPath.verifyAbsolutePath('D:\\LABORATORIA\\repaso html')).toBe('D:\\LABORATORIA\\repaso html');
  });

  it('should return the relative path as absolute path', () => {
    expect(absPath.verifyAbsolutePath('..\\LIM013-fe-md-links\\package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });

  it('should throw an error if path not found', () => {
    expect(() => {
      absPath.verifyAbsolutePath('/SOCIAL_NETWORK');
    }).toThrow('Path not found');
  });
});
