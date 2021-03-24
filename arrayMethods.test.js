const { map, filter } = require('./arrayMethods');

describe('map function', () => {
  it('should return an array that adds 1 to every item.', () => {
    const array = [1, 2, 3, 4];

    const newArray = map(array, (n) => n + 1);

    expect(newArray).toEqual([2, 3, 4, 5]);
  });
});

describe('filter function', () => {
  it('should take an array of numbers and return an array of only the even numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    const result = filter(arr, (n) => n % 2 === 0);

    const expectation = [2, 4, 6];

    expect(result).toEqual(expectation);
  });
});

describe('findIndex function', () => {
  it('should take an array and returns the index of the first element that is true', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    const result = filter(arr, (n) => n === 7);

    const expectation = [6];

    expect(result).toEqual(expectation);
  });
});
