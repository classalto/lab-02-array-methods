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

module.exports = { map, filter };
