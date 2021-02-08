import _ from 'lodash';

const generateIndent = (level) => (level === 0 ? '' : ' '.repeat(level * 4));

const normalizeValue = (value, level) => {
  const indentWide = generateIndent(level + 2);
  const indent = generateIndent(level + 1);
  if (!_.isPlainObject(value)) {
    return value;
  }
  const result = _.keys(value).map((key) => `${indentWide}${key}: ${normalizeValue(value[key], level + 1)}`);
  return `{\n${result.join('\n')}\n${indent}}`;
};

const formatToStylish = (diffsTree, level = 0) => {
  const indentWide = generateIndent(level + 1);
  const indent = generateIndent(level);
  const indentWithPlus = `${indent}  + `;
  const indentWithMinus = `${indent}  - `;
  const formattedDiffs = diffsTree.map(({
    key, status, oldValue, newValue, children,
  }) => {
    const normalizedOldValue = normalizeValue(oldValue, level);
    const normalizedNewValue = normalizeValue(newValue, level);
    switch (status) {
      case 'removed':
        return `${indentWithMinus}${key}: ${normalizedOldValue}`;
      case 'added':
        return `${indentWithPlus}${key}: ${normalizedNewValue}`;
      case 'unchanged':
        return `${indentWide}${key}: ${normalizedOldValue}`;
      case 'changed':
        if (children) {
          return `${indentWide}${key}: ${formatToStylish(children, level + 1)}`;
        }
        return `${indentWithMinus}${key}: ${normalizedOldValue}\n${indentWithPlus}${key}: ${normalizedNewValue}`;
      default:
        throw new Error(`Unknown status ${status}`);
    }
  });
  return `{\n${formattedDiffs.join('\n')}\n${indent}}`;
};

export default formatToStylish;
