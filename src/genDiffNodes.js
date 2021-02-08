import _ from 'lodash';

const getStatusByKey = (obj1, obj2, key) => {
  if (key in obj1 && !(key in obj2)) {
    return 'removed';
  }
  if (!(key in obj1) && key in obj2) {
    return 'added';
  }
  if (_.isEqual(obj1[key], obj2[key])) {
    return 'unchanged';
  }
  return 'changed';
};

const genDiffNodes = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const unionKeys = _.union(keys1, keys2);
  const sortedUnionKeys = _.sortBy(unionKeys);
  const diffNodes = sortedUnionKeys.map((key) => {
    const status = getStatusByKey(obj1, obj2, key);

    switch (status) {
      case 'removed':
        return { key, status, oldValue: obj1[key] };
      case 'added':
        return { key, status, newValue: obj2[key] };
      case 'unchanged':
        return { key, status, oldValue: obj1[key] };
      case 'changed':
        if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
          return { key, status, children: genDiffNodes(obj1[key], obj2[key]) };
        }
        return {
          key, status, oldValue: obj1[key], newValue: obj2[key],
        };
      default:
        throw new Error(`Unknown status ${status}`);
    }
  });
  return diffNodes;
};

export default genDiffNodes;
