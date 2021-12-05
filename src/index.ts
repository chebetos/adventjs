// @ts-ignore
import contarOvejas from './dia01';
import { shout } from './utils';
import listGifts from './dia02';
import isValid from './dia03';
import createXmasTree from './dia04';

function dia01() {
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
  ];
  const ovejasFiltradas = contarOvejas(ovejas);
  shout(`Solo ${ovejasFiltradas.length} ovejas cumplen las condiciones`);
}

function dia02() {
  const carta = 'bici coche balón _playstation bici coche peluche';
  const regalos = listGifts(carta);
  shout('La lista de regalos es: ' + JSON.stringify(regalos));
}

function dia03() {
  const letter = 'bici coche (balón) bici coche peluche';
  const listaValida = isValid(letter);
  shout(`La lista "${letter}" es valida: ${listaValida}`);
}

function dia04() {
  shout(createXmasTree(10));
}

function main() {
  dia01();
  dia02();
  dia03();
  dia04();
}

main();
