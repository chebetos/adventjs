// @ts-ignore
import contarOvejas from './dia01';
import { shout } from './utils';

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

function main() {
  dia01();
}

main();
