/** TODO */
export function randomBetween(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}
