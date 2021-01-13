import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../index.js';
import expectedDiffs from '../__fixtures__/expected-diffs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToPlainJSON1 = path.join(__dirname, '../__fixtures__/file1.json');
const pathToPlainJSON2 = path.join(__dirname, '../__fixtures__/file2.json');

test('test gendiff', () => {
  expect(gendiff(pathToPlainJSON1, pathToPlainJSON2, 'stylish')).toEqual(expectedDiffs);
});
