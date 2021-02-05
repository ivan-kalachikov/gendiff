import fs from 'fs';
import genDiffsTree from './genDiffsTree.js';
import parse from './parsers.js';
import formatOutput from './formatters/index.js';
import { normalizePath, getTypeOfFile } from './utils.js';

const getFileData = (filepath) => fs.readFileSync(normalizePath(filepath), 'utf-8');

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Data = getFileData(filepath1);
  const file2Data = getFileData(filepath2);

  const type1 = getTypeOfFile(filepath1);
  const type2 = getTypeOfFile(filepath2);
  const parsedData1 = parse(type1, file1Data);
  const parsedData2 = parse(type2, file2Data);

  const diffs = genDiffsTree(parsedData1, parsedData2);
  const formattedString = formatOutput(diffs, format);
  return (formattedString);
};

export default gendiff;
