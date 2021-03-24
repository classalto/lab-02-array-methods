const { map } = require('./arrayMethods');

describe('array methods test suite', () => {
  it('should return an array that adds 1 to every item.', () => {
    const array = [1, 2, 3, 4];

    const newArray = map(array, (n) => n + 1);

    expect(newArray).toEqual([2, 3, 4, 5]);
  });
});
