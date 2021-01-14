import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../index.js';
import expectedDiffs from '../__fixtures__/expected-diffs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__/', filename);
const plainJSON1 = getFixturePath('file1.json');
const plainJSON2 = getFixturePath('file2.json');
const plainYML1 = getFixturePath('file1.yml');
const plainYML2 = getFixturePath('file2.yml');

test('test gendiff on plain json', () => {
  expect(gendiff(plainJSON1, plainJSON2, 'stylish')).toEqual(expectedDiffs);
});

test('test gendiff on plain yml', () => {
  expect(gendiff(plainYML1, plainYML2, 'stylish')).toEqual(expectedDiffs);
});
