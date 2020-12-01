const absPath = require('../src/absolute-path');

// absPath.pathNormalize function test

describe('absPath.pathNormalize', () => {
  it('should be a function', () => {
    expect(typeof absPath.pathNormalize).toBe('function');
  });

  it('should normalize the path', () => {
    expect(absPath.pathNormalize('D:/LABORATORIA/md-links-project')).toBe('D:\\LABORATORIA\\md-links-project');
  });
});

// absPath.pathExists function test

describe('absPath.pathExists', () => {
  it('should be a function', () => {
    expect(typeof absPath.pathExists).toBe('function');
  });

  it('should return a true value to relative path package.json ', () => {
    expect(absPath.pathExists('package.json')).toBe(true);
  });

  it('should return a false value to D:/LABORATORIA/md-links-project/LIM013-fe-md-links/hello.txt path', () => {
    expect(absPath.pathExists('D:\\LABORATORIA/md-links-project/LIM013-fe-md-links/hola.txt')).toBe(false);
  });
});

// absPath.pathIsAbsolute function test

describe('absPath.pathIsAbsolute', () => {
  it('should be a function', () => {
    expect(typeof absPath.pathIsAbsolute).toBe('function');
  });

  it('should return a true value to D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json path', () => {
    expect(absPath.pathIsAbsolute('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json')).toBe(true);
  });

  it('should return a false value to relative path package.json ', () => {
    expect(absPath.pathIsAbsolute('package.json')).not.toBe(true);
  });
});

// absPath.convertToAbsolutePath function test

describe('absPath.convertToAbsolutePath', () => {
  it('should be a function', () => {
    expect(typeof absPath.convertToAbsolutePath).toBe('function');
  });

  it('should return the absolute path of the relative path package.json', () => {
    expect(absPath.convertToAbsolutePath('package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });
});

// absPath.absolutePath function test

describe('absPath.absolutePath', () => {
  it('should be a function', () => {
    expect(typeof absPath.absolutePath).toBe('function');
  });

  it('should throw an error if called without an argument', () => {
    expect(() => {
      absPath.absolutePath();
    }).toThrow('path1 cannot be empty');
  });

  it('should return the absolute path as absolute path', () => {
    expect(absPath.absolutePath('D:\\LABORATORIA\\repaso html')).toBe('D:\\LABORATORIA\\repaso html');
  });

  it('should return the relative path as absolute path', () => {
    expect(absPath.absolutePath('..\\LIM013-fe-md-links\\package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });

  it('should throw an error if path not found', () => {
    expect(() => {
      absPath.absolutePath('/SOCIAL_NETWORK');
    }).toThrow('Path not found');
  });
});
