const pairs = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
];

const closers = [')', ']', '}'];

function isBalanced(letter: string, pairIdx: number): boolean {
  const firstElement = pairs[pairIdx][0];
  const secondElement = pairs[pairIdx][1];

  const characters = firstElement + secondElement;
  //return false si lo que hay entre parentesis está vacío ()
  if (letter.indexOf(characters) >= 0) {
    return false;
  }
  const otherClosers = closers.filter((closer) => closer != secondElement);
  const stack = [];
  for (const character of letter) {
    if (character === firstElement) {
      stack.push(character);
    }
    if (character === secondElement) {
      stack.pop();
    }
    //hay un parentesis abierto, pero se consigue el cierre de otro
    if (stack.length > 0 && otherClosers.includes(character)) {
      return false;
    }
  }
  return stack.length === 0;
}

export default function isValid(letter: string): boolean {
  return isBalanced(letter, 0) && isBalanced(letter, 1) && isBalanced(letter, 2);
}
