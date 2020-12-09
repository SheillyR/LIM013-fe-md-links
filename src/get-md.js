const marked = require('marked');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const { readDir } = require('./read-dir.js');

const getMdFiles = (inputPath) => {
  const arrayOfPathsFiles = readDir(inputPath);
  const mdFilesArray = [];
  arrayOfPathsFiles.forEach((file) => {
  // Get current filenames with specific extension.
    if (path.extname(file) === '.md') {
      mdFilesArray.push(file);
    }
  });
  return mdFilesArray;
};

const getMdLinks = (inputPath) => {
  const arrayOfObjMdLinks = [];
  if (getMdFiles.length !== 0) {
    getMdFiles(inputPath).forEach((mdFile) => {
      const pathEncoding = fs.readFileSync(mdFile, 'utf-8');
      const mdToHtml = marked(pathEncoding);
      const dom = new JSDOM(mdToHtml);
      const nodeList = dom.window.document.querySelectorAll('a');

      nodeList.forEach((element) => {
        arrayOfObjMdLinks.push({
          href: element.getAttribute('href'),
          text: (element.textContent).slice(0, 50),
          file: mdFile,
        });
      });
    });
  } else {
    throw Error('no files with extension .md');
  }
  // console.log(arrayOfObjMdLinks);
  return arrayOfObjMdLinks;
};

module.exports = {
  getMdFiles,
  getMdLinks,
};
