const formatToStylish = (diffs) => {
  let result = '{\n';
  result += diffs.reduce((acc, {
    status, key, value, newValue,
  }) => {
    let line;
    if (status === 'removed') {
      line = `  - ${key}: ${value}\n`;
    }
    if (status === 'added') {
      line = `  + ${key}: ${value}\n`;
    }
    if (status === 'not_changed') {
      line = `    ${key}: ${value}\n`;
    }
    if (status === 'changed') {
      line = `  - ${key}: ${value}\n  + ${key}: ${newValue}\n`;
    }
    return acc.concat(line);
  }, '');
  result += '}';
  return result;
};

const formatOutput = (diffs, format) => format === 'stylish' && formatToStylish(diffs);

export default formatOutput;
