function findHandshakes(n) {
  let sumHandshakes = 0;
  if (n <= 2) {
    return 1;
  }
  sumHandshakes += findHandshakes(n - 1) + (n - 1);
  return sumHandshakes;
}
function getParticipants(handshakes) {
  if (handshakes === 1) {
    return 2;
  }
  let human = 1;
  let handshakesCounter = 0;
  for (let i = 1; i <= handshakes; i += 1) {
    handshakesCounter = findHandshakes(i);
    if (handshakes <= handshakesCounter) {
      return human;
    }
    human += 1;
  }
  return human;
}

console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(3));
console.log(getParticipants(6));
