const marked = require('marked');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const dir = require('./dir.js');

const getMdFiles = (inputPath) => {
  const arrayOfPathsFiles = dir.readDir(inputPath);
  const mdFilesArray = [];
  arrayOfPathsFiles.forEach((file) => {
  // Get current filenames with specific extension.
    if (path.extname(file) === '.md') {
      mdFilesArray.push(file);
      return mdFilesArray;
    }
    throw Error('no files with extension .md');
  });
  return mdFilesArray;
};

const mdLinks = (inputPath) => {
  const ArrayOfObjMdLinks = [];
  getMdFiles(inputPath).forEach((mdFile) => {
    const pathEncoding = fs.readFileSync(mdFile, 'utf-8');
    const mdToHtml = marked(pathEncoding);
    const dom = new JSDOM(mdToHtml);
    const nodeList = dom.window.document.querySelectorAll('a');

    nodeList.forEach((elem) => {
      ArrayOfObjMdLinks.push({
        href: elem.getAttribute('href'),
        text: elem.textContent,
        file: mdFile,
      });
    });
  });
  // console.log(ArrayOfObjMdLinks);
  return ArrayOfObjMdLinks;
};

module.exports = {
  getMdFiles,
  mdLinks,
};
