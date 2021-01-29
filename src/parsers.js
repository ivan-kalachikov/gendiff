import yaml from 'js-yaml';

export default (type, data) => {
  switch (type) {
    case '.yml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown file type ${type}`);
  }
};
