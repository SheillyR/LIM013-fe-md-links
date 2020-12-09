#!/usr/bin/env node
const { program } = require('commander');
const { mainMdLinks } = require('./src/main.js');

program.version('0.0.1');

program
  .arguments('[inputPath]')
  .option('-v,--validate', 'Show validate links')
  .option('-s,--stats', 'Basic statistics about the links')
  .option('--validate --stats', 'Statistics with validate results')
  .action((inputPath, options) => {
    mainMdLinks(inputPath, options);
  });

program.parse(process.argv);
/*
// const markdown = require('./src/md-links.js');
// const { getMdLinks } = require('./src/md-links.js');
const { stats } = require('./src/options.js');

const inputPath = process.argv[2];
// markdown.getMdLinks(inputPath);
// getMdLinks(inputPath);
stats(inputPath);
// 'D:\\LABORATORIA\\test-md'
*/
