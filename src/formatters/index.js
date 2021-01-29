import formatToStylish from './format-stylish.js';
import formatToPlain from './format-plain.js';
import formatToJSON from './format-json.js';

const formatOutput = (diffs, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return formatToStylish(diffs);
    case 'plain':
      return formatToPlain(diffs);
    case 'json':
      return formatToJSON(diffs);
    default:
      throw new Error('Unknown format');
  }
};

export default formatOutput;
