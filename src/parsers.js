import yaml from 'js-yaml';

export default (type = '.json', data) => {
  if (type === '.yml') {
    return yaml.load(data);
  }
  if (type === '.json') {
    return JSON.parse(data);
  }
  return JSON.parse(data);
};
