import daysToXmas from '../dia05';

test('daysToXmas 2021-12-01', () => {
  const date1 = new Date('Dec 1, 2021');
  expect(daysToXmas(date1)).toBe(24);
});

test('daysToXmas Dec 24, 2021 23:59:59', () => {
  const date1 = new Date('Dec 24, 2021 23:59:59');
  expect(daysToXmas(date1)).toBe(1);
});

test('daysToXmas Dec 24,00:00:01', () => {
  const date1 = new Date('Dec 24, 2021 00:00:01');
  expect(daysToXmas(date1)).toBe(1);
});

test('daysToXmas December 20, 2021 03:24:00', () => {
  const date1 = new Date('December 20, 2021 03:24:00');
  expect(daysToXmas(date1)).toBe(5);
});

test('daysToXmas Dec 25, 2021', () => {
  const date1 = new Date('Dec 25, 2021');
  expect(daysToXmas(date1)).toBe(0);
});

test('daysToXmas Dec 26, 2021', () => {
  const date1 = new Date('Dec 26, 2021');
  expect(daysToXmas(date1)).toBe(-1);
});

test('daysToXmas Dec 31, 2021', () => {
  const date1 = new Date('Dec 31, 2021');
  expect(daysToXmas(date1)).toBe(-6);
});

test('daysToXmas Jan 1, 2022 00:00:01', () => {
  const date1 = new Date('Jan 1, 2022 00:00:01');
  expect(daysToXmas(date1)).toBe(-7);
});

test('daysToXmas Jan 1, 2022 23:59:59', () => {
  const date1 = new Date('Jan 1, 2022 23:59:59');
  expect(daysToXmas(date1)).toBe(-7);
});
