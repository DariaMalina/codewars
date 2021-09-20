// eslint-disable-next-line consistent-return
function absentVowel(x) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = x.toLowerCase().split('');
  for (let i = 0; i < vowels.length; i += 1) {
    if (!arr.includes(vowels[i])) {
      return i;
    }
  }
}

// eslint-disable-next-line no-console
console.log(absentVowel('John Doe hs seven red pples under his bsket'));
