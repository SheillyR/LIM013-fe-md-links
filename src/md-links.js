const { getMdLinks } = require('./get-md.js');
const { validateLinks } = require('./options.js');

const mdLinks = (inputPath, options) => new Promise((resolve) => {
  const arrayOfObjMdLinks = getMdLinks(inputPath);
  const arrayOfObjUrl = arrayOfObjMdLinks.filter((link) => link.href.startsWith('http'));
  if (options.validate) resolve(validateLinks(arrayOfObjUrl));
  else resolve(arrayOfObjUrl);
});

exports.mdLinks = mdLinks;
