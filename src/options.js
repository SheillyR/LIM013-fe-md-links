const fetch = require('node-fetch');
const { getMdLinks } = require('./md-links.js');

const validateLinks = (inputPath) => {
  const arrayOfObjMdLinks = getMdLinks(inputPath);
  // let urlObject = [];
  // const arrayOfObjUrl = arrayOfObjMdLinks.filter((link) => link.href.includes('http'));
  const arrayValidLinks = arrayOfObjMdLinks.map((link) => fetch(link.href)
    .then((response) => console.log(({
      ...link,
      status: response.status,
      message: response.statusText,
    })))
    .catch((err) => console.log(({
      ...link,
      status: err.status,
      message: 'Fail',
    }))));
  // console.log(validateObjects);
  return Promise.all(arrayValidLinks);
};

const stats = () => {
  
};

exports.validateLinks = validateLinks;
