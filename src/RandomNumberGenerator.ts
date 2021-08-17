export default class RandomNumberGenerator {
  public next(min: number = 0, max: number = 1): number {
    return min + Math.random() * (max - min);
  }

  public nextInteger(min: number = 0, max: number = 1): number {
    return Math.round(this.next(min, max));
  }
}
