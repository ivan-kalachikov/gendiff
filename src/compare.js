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

const compare = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const unionKeys = _.union(keys1, keys2).sort();
  const diffs = unionKeys.map((key) => {
    const status = getStatusByKey(obj1, obj2, key);
    const item = {
      key,
      status,
    };
    switch (status) {
      case 'removed':
        item.value = obj1[key];
        break;
      case 'added':
        item.value = obj2[key];
        break;
      case 'unchanged':
        item.value = obj1[key];
        break;
      case 'changed_deep':
        item.children = compare(obj1[key], obj2[key]);
        break;
      default:
        item.value = obj1[key];
        item.newValue = obj2[key];
    }
    return item;
  });
  return diffs;
};

export default compare;
