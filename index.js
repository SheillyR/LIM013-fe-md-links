#!/usr/bin/env node

const mdLinks = require('./src/md-links.js');

const inputPath = process.argv[2];
mdLinks.mdLinks(inputPath);

// 'D:\\LABORATORIA\\test-md'
