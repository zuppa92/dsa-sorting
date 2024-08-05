const { pivot, quickSort } = require('./quick');

describe('pivot', function () {
  it('should exist', function () {
    expect(typeof pivot).toBe('function');
  });

  it('should return the pivot index', function () {
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    expect(pivot(arr1)).toBe(3);
    expect(pivot(arr2)).toBe(4);
  });

  it('should mutate the array by placing values on either side of the pivot', function () {
    var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    pivot(arr1);
    pivot(arr2);
    expect(arr1.slice(0, 3).sort((a, b) => a - b)).toEqual([2, 3, 4]);
    expect(arr1.slice(3).sort((a, b) => a - b)).toEqual([5, 7, 8, 9, 10, 20]);
    expect(arr2.slice(0, 4).sort((a, b) => a - b)).toEqual([0, 2, 4, 5]);
    expect(arr2.slice(4).sort((a, b) => a - b)).toEqual([8, 10, 11, 12, 13, 16]);
  });
});

describe('quickSort', function () {
  it('should exist', function () {
    expect(typeof quickSort).toBe('function');
  });

  it('should sort numbers in ascending order', function () {
    expect(quickSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
    expect(quickSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7]);
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(quickSort([])).toEqual([]);

    var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
    expect(quickSort(nums)).toEqual([2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]);
  });
});