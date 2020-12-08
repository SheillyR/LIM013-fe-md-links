#!/usr/bin/env node

// const markdown = require('./src/md-links.js');
// const { getMdLinks } = require('./src/md-links.js');
const { validateLinks } = require('./src/options.js');

const inputPath = process.argv[2];
// markdown.getMdLinks(inputPath);
// getMdLinks(inputPath);
validateLinks(inputPath);
// 'D:\\LABORATORIA\\test-md'
