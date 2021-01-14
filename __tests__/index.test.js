import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../index.js';
import expectedDiffs from '../__fixtures__/expected-diffs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToPlainJSON1 = path.join(__dirname, '../__fixtures__/file1.json');
const pathToPlainJSON2 = path.join(__dirname, '../__fixtures__/file2.json');
const pathToPlainYML1 = path.join(__dirname, '../__fixtures__/file1.yml');
const pathToPlainYML2 = path.join(__dirname, '../__fixtures__/file2.yml');

test('test gendiff on plain json', () => {
  expect(gendiff(pathToPlainJSON1, pathToPlainJSON2, 'stylish')).toEqual(expectedDiffs);
});

test('test gendiff on plain yml', () => {
  expect(gendiff(pathToPlainYML1, pathToPlainYML2, 'stylish')).toEqual(expectedDiffs);
});
