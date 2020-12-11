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

// 'D:\\LABORATORIA\\test-md'
