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
      key, status, oldValue, newValue, children,
    }) => {
      const normalizedOldValue = normalizeValue(oldValue);
      const normalizedNewValue = normalizeValue(newValue);
      switch (status) {
        case 'removed':
          return `Property '${path}${key}' was removed`;
        case 'added':
          return `Property '${path}${key}' was added with value: ${normalizedNewValue}`;
        case 'changed':
          if (children) {
            return formatToPlain(children, `${path}${key}.`);
          }
          return `Property '${path}${key}' was updated. From ${normalizedOldValue} to ${normalizedNewValue}`;
        default:
          throw new Error(`Unknown status ${status}`);
      }
    });
  return formattedDiffs.join('\n');
};

export default formatToPlain;
