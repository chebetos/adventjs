export type Regalo = {
  [key: string]: number;
};

export default function listGifts(letter: string): Regalo {
  const juguetesEnCarta = letter
    .split(' ')
    .map((juguete) => juguete.trim())
    .filter((juguete) => !juguete.startsWith('_') && juguete.length > 0);
  const regalos: Regalo = {};
  juguetesEnCarta.forEach((juguete) => {
    if (regalos[juguete]) {
      regalos[juguete]++;
      return;
    }
    regalos[juguete] = 1;
  });
  return regalos;
}
