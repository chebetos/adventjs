import sumPairs from '../dia06';

const data: [number[], number, number[] | null][] = [
  [[3, 5, 7, 2], 10, [3, 7]],
  [[2, 2, 3, 1], 4, [2, 2]],
  [[6, 7, 1, 2], 8, [6, 2]],
  [[0, 2, 2, 3, -1, 1, 5], 6, [1, 5]],
  [[-3, -2, 7, -5], 10, null],
];

test.each(data)('sumPairs(%s, %s)', (numbers, result, expected) => {
  expect(sumPairs(numbers, result)).toEqual(expected);
});
