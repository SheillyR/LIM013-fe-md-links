#!/usr/bin/env node
const { program } = require('commander');
const { mainMdLinks } = require('./src/index.js');

program.version('0.0.1');

program
  .command('md-links <path>')
  .option('-v,--validate', 'Show validate links')
  .option('-s,--stats', 'Basic statistics about the links')
  .option('--validate --stats', 'Statistics with validate results')
  .action((path, options) => {
    mainMdLinks(path, options);
  });

program.parse(process.argv);
// 'D:\\LABORATORIA\\test-md'
