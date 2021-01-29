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
  if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
    return 'changed_deep';
  }
  return 'changed';
};

const genDiffsTree = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const unionKeys = _.union(keys1, keys2);
  const sortedUnionKeys = _.sortBy(unionKeys);
  const diffs = sortedUnionKeys.map((key) => {
    const status = getStatusByKey(obj1, obj2, key);

    const generateNode = (oldValue, newValue, children) => ({
      key, status, oldValue, newValue, children,
    });

    switch (status) {
      case 'removed':
        return generateNode(obj1[key]);
      case 'added':
        return generateNode(undefined, obj2[key]);
      case 'unchanged':
        return generateNode(obj1[key]);
      case 'changed_deep':
        return generateNode(undefined, undefined, genDiffsTree(obj1[key], obj2[key]));
      case 'changed':
        return generateNode(obj1[key], obj2[key]);
      default:
        throw new Error(`Unknown status ${status}`);
    }
  });
  return diffs;
};

export default genDiffsTree;
