const map = (array, callback) => {
  const mappedArray = [...array];

  for (let i = 0; i < mappedArray.length; i++) {
    mappedArray[i] = callback(mappedArray[i]);
  }

  return mappedArray;
};

module.exports = { map };
