import _ from 'lodash';

const normalizeValue = (value) => {
  if (!_.isPlainObject(value)) {
    return typeof value === 'string' ? `'${value}'` : value;
  }
  return '[complex value]';
};

const formatToPlain = (diffsTree, path = '') => {
  const formattedDiffs = diffsTree
    .filter(({ status }) => status !== 'unchanged')
    .map(({
      key, status, value, newValue, children,
    }) => {
      const normalizedValue = normalizeValue(value);
      const normalizedNewValue = normalizeValue(newValue);
      switch (status) {
        case 'changed_deep':
          return formatToPlain(children, `${path}${key}.`);
        case 'removed':
          return `Property '${path}${key}' was removed`;
        case 'added':
          return `Property '${path}${key}' was added with value: ${normalizedValue}`;
        case 'changed':
          return `Property '${path}${key}' was updated. From ${normalizedValue} to ${normalizedNewValue}`;
        default:
          return false;
      }
    });
  return formattedDiffs.join('\n');
};

export default formatToPlain;
