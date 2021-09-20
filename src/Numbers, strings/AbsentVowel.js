// eslint-disable-next-line consistent-return
function absentVowel(x) {
  const array = ['a', 'e', 'i', 'o', 'u'];
  const arr = x.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (!arr.includes(array[i])) {
      return i;
    }
  }
}

// eslint-disable-next-line no-console
console.log(absentVowel('John Doe hs seven red pples under his bsket'));
