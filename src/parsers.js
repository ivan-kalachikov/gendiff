import yaml from 'js-yaml';

export default (type = '.json', data) => {
  let parse;
  if (type === '.yml') {
    parse = yaml.load;
  }
  if (type === '.json') {
    parse = JSON.parse;
  }
  return parse(data);
};
