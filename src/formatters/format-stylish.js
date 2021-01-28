import _ from 'lodash';

const generateIndent = (level) => (level === 0 ? '' : ' '.repeat(level * 4));

const normalizeValue = (value, level) => {
  const indentWide = generateIndent(level + 2);
  const indent = generateIndent(level + 1);
  if (!_.isPlainObject(value)) {
    return value;
  }
  const result = _.keys(value).map((key) => {
    if (!_.isPlainObject(value[key])) {
      return `${indentWide}${key}: ${value[key]}`;
    }
    return `${indentWide}${key}: ${normalizeValue(value[key], level + 1)}`;
  });
  return `{\n${result.join('\n')}\n${indent}}`;
};

const formatToStylish = (diffs, level = 0) => {
  const indentWide = generateIndent(level + 1);
  const indent = generateIndent(level);
  const plus = `${indent}  + `;
  const minus = `${indent}  - `;
  const formattedDiffs = diffs.map(({
    key, status, value, newValue, children,
  }) => {
    const normalizedValue = normalizeValue(value, level);
    switch (status) {
      case 'removed':
        return `${minus}${key}: ${normalizedValue}`;
      case 'added':
        return `${plus}${key}: ${normalizedValue}`;
      case 'unchanged':
        return `${indentWide}${key}: ${normalizedValue}`;
      case 'changed_deep':
        return `${indentWide}${key}: ${formatToStylish(children, level + 1)}`;
      default:
        return `${minus}${key}: ${normalizedValue}\n${plus}${key}: ${newValue}`;
    }
  });
  return `{\n${formattedDiffs.join('\n')}\n${indent}}`;
};

export default formatToStylish;
