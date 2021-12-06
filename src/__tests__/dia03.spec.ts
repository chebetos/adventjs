import isValid from '../dia03';

const data: Array<[string, boolean]> = [
  ['bici coche (balón) bici coche peluche', true],
  ['(muñeca) consola bici', true],
  ['(muñeca) {consola bici}', true],
  ['bici coche (balón bici coche', false],
  ['peluche (bici [coche) bici coche balón', false],
  ['(peluche {) bici', false],
  ['(peluche) {)} bici', false],
  ['(peluche) {bici}[coche(balón) bici', false],
  ['() bici', false],
];

test.each(data)("isValid('%s')", (text, expected) => {
  expect(isValid(text)).toBe(expected);
});
