export class Format {
  static toDatetimeFormat = (date: string): Date => {
    const dateArray = date.split(' ')[0].split('/').map(d => Number(d));
    const timeArray = date.split(' ')[1].split(':').map(t => Number(t));

    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0], timeArray[0], timeArray[1], timeArray[2], 0);
  }

  static setDate = (): Date => {
    const date = new Date();

    return this.toDatetimeFormat(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
  }
}