export interface Oveja {
  name: string;
  color: string;
}
export default function contarOvejas(ovejas: Oveja[]) {
  return ovejas.filter(
    (ov) => ov.color === 'rojo' && ov.name.toLowerCase().includes('n') && ov.name.toLowerCase().includes('a')
  );
}
