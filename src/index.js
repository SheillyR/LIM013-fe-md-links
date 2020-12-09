/* eslint-disable no-console */
const { mdLinks } = require('./md-links');
const { stats } = require('./options.js');

const mainMdLinks = (inputPath, options) => {
  mdLinks(inputPath, options)
    .then((arrayOfObjMdLinks) => {
      const statsLinks = stats(arrayOfObjMdLinks);
      let brokenLinksCount = 0;
      if (!options.validate && !options.stats) {
        arrayOfObjMdLinks.forEach((link) => {
          console.log(link.file, link.href, link.text);
        });
      }
      if (options.validate && !options.stats) {
        arrayOfObjMdLinks.forEach((link) => {
          if (link.status >= 200 && link.status <= 300) {
            console.log(link.file, link.href, link.status, link.message, link.text);
          } else {
            console.log(link.file, link.href, link.status, link.message, link.text);
          }
        });
      }
      if (!options.validate && options.stats) {
        console.log(statsLinks);
      }
      if (options.validate && options.stats) {
        arrayOfObjMdLinks.forEach((link) => {
          if (link.status > 400 && link.status <= 500) brokenLinksCount += 1;
        });
        console.log(statsLinks);
        console.log('Broken:', brokenLinksCount);
      }
    })
    .catch((error) => ((error.code === 'ENOENT') ? console.log('The input path is incorrect') : console.log(error)));
};

exports.mainMdLinks = mainMdLinks;
