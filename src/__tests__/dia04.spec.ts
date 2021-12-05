import createXmasTree, { center } from '../dia04';

test('center', () => {
  expect(center('*', 9)).toStrictEqual('____*____\n');
  expect(center('***', 9)).toStrictEqual('___***___\n');
  expect(center('*****', 9)).toStrictEqual('__*****__\n');
});

test('createXmasTree', () => {
  const arbol = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`;

  expect(createXmasTree(5)).toStrictEqual(arbol);
});
