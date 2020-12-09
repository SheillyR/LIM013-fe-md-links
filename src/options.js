const fetch = require('node-fetch');

const validateLinks = (arrayOfObjMdLinks) => {
  const arrayValidLinks = arrayOfObjMdLinks.map((link) => fetch(link.href)
    .then((response) => ({
      ...link,
      status: response.status,
      message: response.statusText,
    }))
    .catch(() => console.log(({
      ...link,
      status: 'Error',
      message: 'Fail',
    }))));
  // console.log(validateObjects);
  return Promise.all(arrayValidLinks);
};

const stats = (arrayOfObjMdLinks) => {
  // const arrayOfObjUrl = arrayOfObjMdLinks.filter((link) => link.href.includes('http'));
  const totalLinks = arrayOfObjMdLinks.length;
  const uniqueLinks = [...new Set(arrayOfObjMdLinks.map((item) => item.href))].length;
  return `Total: ${totalLinks}\nUnique: ${uniqueLinks} `;
};

module.exports = {
  validateLinks,
  stats,
};
