export default function sumPairs(numbers: number[], result: number): [number, number] | null {
  for (let i = 0; i < numbers.length; i++) {
    const number1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const number2 = numbers[j];
      const sum = number1 + number2;
      if (sum === result) {
        return [number1, number2];
      }
    }
  }
  return null;
}
