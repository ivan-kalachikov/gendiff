import _ from 'lodash';

const generateIndent = (level) => (level === 0 ? '' : ' '.repeat(level * 4));

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
        return `${indent}${key}: ${normalizedValue}`;
      case 'changed_deep':
        return `${indent}${key}: ${formatToStylish(children, level + 1)}`;
      default:
        return `${minus}${key}: ${normalizedValue}\n${plus}${key}: ${newValue}`;
    }
  });
  return `{\n${formattedDiffs.join('\n')}\n${indent2}}`;
};

export default formatToStylish;
