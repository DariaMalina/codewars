function isIsogram(str) {
  const string = str.toLowerCase().split('');
  for (let i = 0; i < string.length; i += 1) {
    const word = string[i];
    for (let j = i + 1; j < string.length; j += 1) {
      if (word === string[j]) {
        return false;
      }
    }
  }
  return true;
}

// eslint-disable-next-line no-console
console.log(isIsogram('Dermatoglyphics'));
