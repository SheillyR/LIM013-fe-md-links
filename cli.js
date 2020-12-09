#!/usr/bin/env node

// const markdown = require('./src/md-links.js');
// const { getMdLinks } = require('./src/md-links.js');
const { stats } = require('./src/options.js');

const inputPath = process.argv[2];
// markdown.getMdLinks(inputPath);
// getMdLinks(inputPath);
stats(inputPath);
// 'D:\\LABORATORIA\\test-md'
