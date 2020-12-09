/* eslint-disable no-console */
const chalk = require('chalk');
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
            console.log(link.file, link.href, chalk.green(link.status),
              chalk.yellow(link.message), link.text);
          } else {
            console.log(link.file, link.href, chalk.red(link.status),
              chalk.blue(link.message), link.text);
          }
        });
      }
      if (!options.validate && options.stats) {
        console.log(chalk.bold(statsLinks));
      }
      if (options.validate && options.stats) {
        arrayOfObjMdLinks.forEach((link) => {
          if (link.status > 400 && link.status <= 500) brokenLinksCount += 1;
        });
        console.log(chalk.bold(statsLinks));
        console.log(chalk.bold('Broken:', chalk.red(brokenLinksCount)));
      }
    })
    .catch((error) => ((error.code === 'ENOENT') ? console.log('The input path is incorrect') : console.log(error)));
};

exports.mainMdLinks = mainMdLinks;
