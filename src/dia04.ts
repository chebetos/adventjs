export function center(word: string, width: number) {
  const spacesAtStart = (width - word.length) / 2 + word.length;
  return word.padStart(spacesAtStart, '_').padEnd(width, '_') + '\n';
}

export default function createXmasTree(height: number): string {
  const weight = height * 2 - 1;
  let floorWord = '*';
  let xmasTree = '';
  for (let i = 0; i < height; i++) {
    xmasTree += center(floorWord, weight);
    floorWord += '**';
  }
  xmasTree += center('#', weight);
  xmasTree += center('#', weight);
  return xmasTree.trim();
}
