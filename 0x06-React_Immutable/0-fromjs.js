const { fromJS } = require('immutable');

function getImmutableObject(object) {
  // Convert the object to an immutable Map
  const immutableMap = fromJS(object);
  return immutableMap;
}

// Example usage:
const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

const immutableMap = getImmutableObject(myObject);
console.log(immutableMap);