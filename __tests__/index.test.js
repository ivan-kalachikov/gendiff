import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../index.js';
import expectedDiffs from '../__fixtures__/expected-diffs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__/', filename);
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');

test('test gendiff on json', () => {
  expect(gendiff(json1, json2, 'stylish')).toEqual(expectedDiffs);
});

test('test gendiff on yml', () => {
  expect(gendiff(yml1, yml2, 'stylish')).toEqual(expectedDiffs);
});
