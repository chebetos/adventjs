const xmasDate = new Date('Dec 25, 2021');

const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;

export default function daysToXmas(date: Date): number {
  const dateWithoutTime = new Date(date.getTime());
  dateWithoutTime.setHours(0, 0, 0, 0);

  const time = xmasDate.getTime() - dateWithoutTime.getTime();
  const dayDiff = parseInt((time / MILLIS_PER_DAY).toFixed());
  return Math.floor(dayDiff);
}
