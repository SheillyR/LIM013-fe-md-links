const mdLinks = require('../src/md-links.js');

// mdLinks.pathNormalize function test

describe('mdLinks.pathNormalize', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.pathNormalize).toBe('function');
  });

  it('should normalize the path', () => {
    expect(mdLinks.pathNormalize('D:/LABORATORIA/md-links-project')).toBe('D:\\LABORATORIA\\md-links-project');
  });
});

// mdLinks.pathExists function test

describe('mdLinks.pathExists', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.pathExists).toBe('function');
  });

  it('should return a true value to relative path package.json ', () => {
    expect(mdLinks.pathExists('package.json')).toBe(true);
  });

  it('should return a false value to D:/LABORATORIA/md-links-project/LIM013-fe-md-links/hello.txt path', () => {
    expect(mdLinks.pathExists('D:\\LABORATORIA/md-links-project/LIM013-fe-md-links/hola.txt')).toBe(false);
  });
});

// mdLinks.pathIsAbsolute function test

describe('mdLinks.pathIsAbsolute', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.pathIsAbsolute).toBe('function');
  });

  it('should return a true value to D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json path', () => {
    expect(mdLinks.pathIsAbsolute('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json')).toBe(true);
  });

  it('should return a false value to relative path package.json ', () => {
    expect(mdLinks.pathIsAbsolute('package.json')).not.toBe(true);
  });
});

// mdLinks.convertToAbsolutePath function test

describe('mdLinks.convertToAbsolutePath', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.convertToAbsolutePath).toBe('function');
  });

  it('should return the absolute path of the relative path package.json', () => {
    expect(mdLinks.convertToAbsolutePath('package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });
});

// mdLinks.absolutePath function test

describe('mdLinks.absolutePath', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.absolutePath).toBe('function');
  });

  it('should throw an error if called without an argument', () => {
    expect(() => {
      mdLinks.absolutePath();
    }).toThrow('path1 cannot be empty');
  });

  it('should return the absolute path as absolute path', () => {
    expect(mdLinks.absolutePath('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links');
  });

  it('should return the relative path as absolute path', () => {
    expect(mdLinks.absolutePath('..\\LIM013-fe-md-links\\package.json')).toBe('D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\package.json');
  });

  it('should throw an error if path not found', () => {
    expect(() => {
      mdLinks.absolutePath('/SOCIAL_NETWORK');
    }).toThrow('Path not found');
  });
});
