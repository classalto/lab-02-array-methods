const map = (array, callback) => {
  const mappedArray = [...array];

  for (let i = 0; i < mappedArray.length; i++) {
    mappedArray[i] = callback(mappedArray[i]);
  }

  return mappedArray;
};

const filter = (array, callback) => {
  let filteredArray = [];

  for (let element of array) {
    if (callback(element)) filteredArray = [...filteredArray, element];
  }

  return filteredArray;
};

const findIndex = (array, callback) => {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result = i;
      break;
    }
  }

  return result;
};

module.exports = { map, filter, findIndex };
