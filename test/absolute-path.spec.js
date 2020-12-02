const absPath = require('../src/absolute-path');

// absPath.convertToAbsolutePath function test

describe('absPath.convertToAbsolutePath', () => {
  it('should be a function', () => {
    expect(typeof absPath.convertToAbsolutePath).toBe('function');
  });

  it('should return the same absolute path', () => {
    expect(absPath.convertToAbsolutePath(__dirname)).toBe(__dirname);
  });

  it('should return the absolute path of the relative path package.json', () => {
    expect(absPath.convertToAbsolutePath('test\\absolute-path.spec.js')).toBe(__filename);
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
    }).toThrow('argument cannot be empty');
  });

  it('should return the same absolute path', () => {
    expect(absPath.verifyAbsolutePath(__dirname)).toBe(__dirname);
  });

  it('should return the relative path as absolute path', () => {
    expect(absPath.verifyAbsolutePath('test\\absolute-path.spec.js')).toBe(__filename);
  });

  it('should throw an error if path not found', () => {
    expect(() => {
      absPath.verifyAbsolutePath('/SOCIAL_NETWORK');
    }).toThrow('Path not found');
  });
});
