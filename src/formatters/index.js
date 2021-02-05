import formatToStylish from './stylish.js';
import formatToPlain from './plain.js';

const formatOutput = (diffs, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return formatToStylish(diffs);
    case 'plain':
      return formatToPlain(diffs);
    case 'json':
      return JSON.stringify(diffs);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default formatOutput;
