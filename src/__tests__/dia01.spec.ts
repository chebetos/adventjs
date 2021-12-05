import contarOvejas from '../dia01';

test('contarOvejas', () => {
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
  ];
  const ovejasFiltradas = [
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
  ];
  expect(contarOvejas(ovejas)).toStrictEqual(ovejasFiltradas);
});
