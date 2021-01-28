import _ from 'lodash';

const normalizeValue = (value) => {
  if (!_.isPlainObject(value)) {
    return typeof value === 'string' ? `'${value}'` : value;
  }
  return '[complex value]';
};

const formatToPlain = (diffs, path = '') => {
  const formattedDiffs = diffs
    .filter(({ status }) => status !== 'unchanged')
    .map(({
      key, status, value, newValue, children,
    }) => {
      const normalizedValue = normalizeValue(value);
      const normalizedNewValue = normalizeValue(newValue);
      if (status === 'changed_deep') {
        return formatToPlain(children, `${path}${key}.`);
      }
      if (status === 'removed') {
        return `Property '${path}${key}' was removed`;
      }
      if (status === 'added') {
        return `Property '${path}${key}' was added with value: ${normalizedValue}`;
      }
      if (status === 'changed') {
        return `Property '${path}${key}' was updated. From ${normalizedValue} to ${normalizedNewValue}`;
      }
      return false;
    });
  return formattedDiffs.join('\n');
};

export default formatToPlain;
