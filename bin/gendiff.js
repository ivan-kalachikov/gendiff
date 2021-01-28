#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../index.js';

const gendiffProgram = new Command();

gendiffProgram
  .version('0.0.1')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => (
    console.log(gendiff(filepath1, filepath2, options.format))));

gendiffProgram.parse(process.argv);
