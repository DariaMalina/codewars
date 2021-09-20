// eslint-disable-next-line consistent-return
function nicknameGenerator(name) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  if (name.length <= 3) {
    return 'Error: Name too short';
  }
  if (!vowel.includes(name[2])) {
    return name.slice(0, 3);
  }
  return name.slice(0, 4);
}

// eslint-disable-next-line no-console
console.log(nicknameGenerator('Gregory'));
// eslint-disable-next-line no-console
console.log(nicknameGenerator('Kayne'));
// eslint-disable-next-line no-console
console.log(nicknameGenerator('Sam'));
