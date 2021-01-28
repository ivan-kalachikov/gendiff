import formatToStylish from './format-stylish.js';
import formatToPlain from './format-plain.js';

const formatOutput = (diffs, format) => {
  if (format === 'plain') {
    return formatToPlain(diffs);
  }
  return formatToStylish(diffs);
};

export default formatOutput;
