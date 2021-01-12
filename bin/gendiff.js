import { Command } from 'commander';
import gendiff from '../index.js';

const program = new Command();

program
  .version('0.0.1')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => gendiff(filepath1, filepath2, options.format));

program.parse(process.argv);
