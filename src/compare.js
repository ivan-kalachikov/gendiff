import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unionKeys = _.uniq([...keys1, ...keys2]).sort();

  const result = unionKeys.reduce((acc, key) => {
    const isRemoved = key in obj1 && !(key in obj2);
    const isAdded = !(key in obj1) && key in obj2;
    const notChanged = obj1[key] === obj2[key];
    const isChanged = !notChanged && !isRemoved && !isAdded;

    let item;

    if (isRemoved) {
      item = {
        status: 'removed',
        key,
        value: obj1[key],
      };
    }

    if (isAdded) {
      item = {
        status: 'added',
        key,
        value: obj2[key],
      };
    }

    if (notChanged) {
      item = {
        status: 'not_changed',
        key,
        value: obj1[key],
      };
    }

    if (isChanged) {
      item = {
        status: 'changed',
        key,
        value: obj1[key],
        newValue: obj2[key],
      };
    }

    acc.push(item);
    return acc;
  }, []);

  return result;
};

export default compare;
