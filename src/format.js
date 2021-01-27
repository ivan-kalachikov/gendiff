import _ from 'lodash';

const generateIndent = (level) => (level === 0 ? '' : '    '.repeat(level));

const normalizeValue = (value, level) => {
  const indent = generateIndent(level + 2);
  const indent2 = generateIndent(level + 1);
  if (!_.isPlainObject(value)) {
    return value;
  }
  const result = _.keys(value).map((key) => {
    if (!_.isPlainObject(value[key])) {
      return `${indent}${key}: ${value[key]}`;
    }
    return `${indent}${key}: ${normalizeValue(value[key], level + 1)}`;
  });
  return `{\n${result.join('\n')}\n${indent2}}`;
};

const formatToStylish = (diffs, level = 0) => {
  const indent = generateIndent(level + 1);
  const indent2 = generateIndent(level);
  const plus = `${indent2}  + `;
  const minus = `${indent2}  - `;
  const styledDiffs = diffs.map(({
    key, status, value, newValue, children,
  }) => {
    const normalizedValue = normalizeValue(value, level);
    if (status === 'removed') {
      return `${minus}${key}: ${normalizedValue}`;
    }
    if (status === 'added') {
      return `${plus}${key}: ${normalizedValue}`;
    }
    if (status === 'unchanged') {
      return `${indent}${key}: ${normalizedValue}`;
    }
    if (status === 'changed_deep') {
      return `${indent}${key}: ${formatToStylish(children, level + 1)}`;
    }
    return `${minus}${key}: ${normalizedValue}\n${plus}${key}: ${newValue}`;
  });
  return `{\n${styledDiffs.join('\n')}\n${indent2}}`;
};

const formatOutput = (diffs, format) => format === 'stylish' && formatToStylish(diffs);

export default formatOutput;
