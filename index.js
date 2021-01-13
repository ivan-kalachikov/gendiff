import fs from 'fs';
import path from 'path';
import compare from './src/compare.js';
import formatOutput from './src/format.js';

const normalizePath = (filePath) => (
  path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath)
);

const convertToObject = (type, data) => JSON.parse(data);

const gendiff = (filepath1, filepath2, format) => {
  const path1 = normalizePath(filepath1);
  const path2 = normalizePath(filepath2);
  const type1 = path.extname(path1);
  const type2 = path.extname(path2);

  const file1Data = fs.readFileSync(path1, 'utf-8');
  const file2Data = fs.readFileSync(path2, 'utf-8');

  const diffs = compare(convertToObject(type1, file1Data), convertToObject(type2, file2Data));
  const stylishString = formatOutput(diffs, format);
  console.log(stylishString);
  return (stylishString);
};

export default gendiff;
export { convertToObject, normalizePath };
