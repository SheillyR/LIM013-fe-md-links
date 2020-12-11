const fetchMock = require('fetch-mock');
const options = require('../src/options.js');

fetchMock
  .mock('#1-product-definition', 'Error')
  .mock('https://developer.mozilla.org/es/docs/Glossary/Callback_function', 200)
  .mock('https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html', 404)
  .mock('"https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html"', 'Error');

const arrayOfObjMdLinks = [
  {
    href: '#1-product-definition',
    text: '1. Product definition',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md',
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md',
  },
  {
    href: 'https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html',
    text: 'Not found page',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md',
  },
  {
    href: "'https://carepms.com/nissan-titan/check-if-array-has-unique-values-javascript.html'",
    text: 'Not found page',
    file: 'D:\\LABORATORIA\\md-links-project\\LIM013-fe-md-links\\test_md\\README-DL.md',
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
    status: 400,
    message: 'Not found',
  },
];

describe('options.validateLinks', () => {
  it('should be return a function', () => {
    expect(typeof options.validateLinks).toBe('function');
  });

  it('should return an array of objects with properties of links', () => options.validateLinks(arrayOfObjMdLinks).then((resolve) => {
    expect(resolve).toEqual(arrayOfValidateLinks);
  }).catch(() => {
    // eslint-disable-next-line no-new
    new TypeError('Failed to fetch');
  }));
});

describe('options.stats', () => {
  it('should be return a function', () => {
    expect(typeof options.stats).toBe('function');
  });

  it('should return the number of total and unique links', () => {
    expect(options.stats(arrayOfObjMdLinks)).toEqual('Total: 4 \nUnique: 4');
  });

  it('should return the number of total and unique valid links', () => {
    expect(options.stats(arrayOfValidateLinks)).toEqual('Total: 2 \nUnique: 2');
  });
});
