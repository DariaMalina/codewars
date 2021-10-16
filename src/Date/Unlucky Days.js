function unluckyDays(year) {
  let counter = 0;
  let month = '';
  for (let i = 0; i <= 12; i += 1) {
    month = new Date(year, i, 13).toDateString().slice(0, 3);
    if (month === 'Fri') {
      counter += 1;
    }
  }
  return counter;
}

// eslint-disable-next-line no-console
console.log(unluckyDays(1586)); // 1
// eslint-disable-next-line no-console
console.log(unluckyDays(1001)); // 3
