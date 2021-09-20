function explode(s) {
  const array = s.split('');
  const answer = [];
  for (let i = 0; i < array.length; i += 1) {
    const number = Number(array[i]);
    for (let j = 0; j < number; j += 1) {
      answer.push(number);
    }
  }
  return answer.join('');
}
// eslint-disable-next-line no-console
console.log(explode('312'));
