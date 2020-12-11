const fetch = require('node-fetch');

const validateLinks = (arrayOfObjMdLinks) => {
  const arrayValidLinks = arrayOfObjMdLinks.map((link) => fetch(link.href)
    .then((response) => ({
      ...link,
      status: response.status,
      message: response.statusText,
    }))
    .catch((err) => console.log(({
      ...link,
      status: err,
      message: 'Fail',
    }))));
  return Promise.all(arrayValidLinks);
};

const stats = (arrayOfObjMdLinks) => {
  const totalLinks = arrayOfObjMdLinks.length;
  const uniqueLinks = [...new Set(arrayOfObjMdLinks.map((item) => item.href))].length;
  return `Total: ${totalLinks}\nUnique: ${uniqueLinks} `;
};

module.exports = {
  validateLinks,
  stats,
};
