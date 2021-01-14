import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unionKeys = _.union(keys1, keys2).sort();

  return unionKeys.reduce((acc, key) => {
    const isRemoved = key in obj1 && !(key in obj2);
    const isAdded = !(key in obj1) && key in obj2;
    const notChanged = obj1[key] === obj2[key];
    const isChanged = !notChanged && !isRemoved && !isAdded;

    const item = {
      key,
      value: obj1[key],
    };

    if (isRemoved) {
      item.status = 'removed';
    }

    if (isAdded) {
      item.status = 'added';
      item.value = obj2[key];
    }

    if (notChanged) {
      item.status = 'not_changed';
    }

    if (isChanged) {
      item.status = 'changed';
      item.newValue = obj2[key];
    }

    acc.push(item);
    return acc;
  }, []);
};

export default compare;
