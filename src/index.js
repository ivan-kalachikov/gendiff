import fs from 'fs';
import genDiffNodes from './genDiffNodes.js';
import parse from './parsers.js';
import formatOutput from './formatters/index.js';
import { normalizePath, getTypeOfFile } from './utils.js';

const gendiff = (dataStr1, dataStr2, format = 'stylish') => {
  const diffNodes = genDiffNodes(dataStr1, dataStr2);
  const formattedString = formatOutput(diffNodes, format);
  return formattedString;
};

const gendiffFromFiles = (filepath1, filepath2, format) => {
  const file1Data = fs.readFileSync(normalizePath(filepath1), 'utf-8');
  const file2Data = fs.readFileSync(normalizePath(filepath2), 'utf-8');
  const type1 = getTypeOfFile(filepath1);
  const type2 = getTypeOfFile(filepath2);
  const parsedData1 = parse(type1, file1Data);
  const parsedData2 = parse(type2, file2Data);
  return gendiff(parsedData1, parsedData2, format);
};

export default gendiffFromFiles;
