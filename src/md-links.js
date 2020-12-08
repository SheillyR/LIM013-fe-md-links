const { getMdLinks } = require('./get-md.js');
const { validateLinks } = require('./options.js');

const mdLinks = (inputPath, options) => new Promise((resolve) => {
  const arrayOfObjMdLinks = getMdLinks(inputPath);
  if (!options) resolve(arrayOfObjMdLinks);
  if (options.validate) resolve(validateLinks(arrayOfObjMdLinks));
});

module.exports = {
  getMdLinks,
  mdLinks,
};
