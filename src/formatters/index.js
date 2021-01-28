import formatToStylish from './format-stylish.js';
import formatToPlain from './format-plain.js';
import formatToJSON from './format-json.js';

const formatOutput = (diffs, format) => {
  if (format === 'plain') {
    return formatToPlain(diffs);
  }
  if (format === 'json') {
    return formatToJSON(diffs);
  }
  return formatToStylish(diffs);
};

export default formatOutput;
