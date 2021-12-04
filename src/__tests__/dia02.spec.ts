import listGifts from '../dia02';

test('listGifts', () => {
  const carta = 'bici coche balón  _playstation bici    coche peluche';

  const regalos = {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1,
  };
  expect(listGifts(carta)).toStrictEqual(regalos);
});
