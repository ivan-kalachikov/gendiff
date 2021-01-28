import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../index.js';
import { stylishDiffs, plainDiffs, JSONDiffs } from '../__fixtures__/expected-diffs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '../__fixtures__/', filename);
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');

test('json with stylish format', () => {
  expect(gendiff(json1, json2, 'stylish')).toEqual(stylishDiffs);
});

test('yml with stylish format', () => {
  expect(gendiff(yml1, yml2, 'stylish')).toEqual(stylishDiffs);
});

test('json with plain format', () => {
  expect(gendiff(json1, json2, 'plain')).toEqual(plainDiffs);
});

test('yml with plain format', () => {
  expect(gendiff(yml1, yml2, 'plain')).toEqual(plainDiffs);
});

test('json with json format', () => {
  expect(gendiff(json1, json2, 'json')).toEqual(JSONDiffs);
});

test('yml with json format', () => {
  expect(gendiff(yml1, yml2, 'json')).toEqual(JSONDiffs);
});
