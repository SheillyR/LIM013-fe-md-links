const markdown = require('../src/get-md.js');
const { mdLinks } = require('../src/md-links.js')

const arrayOfObjMdLinks = [
  {
    href: '#1-product-definition',
    text: '1. Product definition',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md'
  },
  {
    href: 'https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html',
    text: 'Not found page',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md'
  },
  {
    href: "'https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html'",
    text: 'Not found page',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md'
  },
];

const arrayOfFilterLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md'
  },
  {
    href: 'https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html',
    text: 'Not found page',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md'
  },
];

const arrayOfValidateLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html',
    text: 'Not found page',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md',
    status: 404,
    message: 'Not Found',
  },
];

describe('markdown.getMdFiles', () => {
  it('should be return a function', () => {
    expect(typeof markdown.getMdFiles).toBe('function');
  });

  it('should returm an empty array', () => {
    expect(markdown.getMdFiles(__filename)).toEqual([]);
  });
});

describe('markdown.getMdLinks', () => {
  it('should be return a function', () => {
    expect(typeof markdown.getMdLinks).toBe('function');
  });

  it('should return an empty array', () => {
    expect(() => {
      markdown.getMdLinks(__filename);
    }).toThrow('no files with extension .md');
  });

  it('should returm an array of objets with properties of links', () => {
    expect(markdown.getMdLinks('./test_md')).toEqual(arrayOfObjMdLinks);
  });
});

describe('mdLinks', () => {
  it('should be return a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('should return an array with links validate links', (done) => mdLinks('./test_md', { validate: true }).then((resolve) => {
    expect(resolve).toEqual(arrayOfValidateLinks);
    done();
  }));

  it('should return an array with filter links', () => mdLinks('./test_md', { validate: false }).then((resolve) => {
    expect(resolve).toEqual(arrayOfFilterLinks);
  }));
});
