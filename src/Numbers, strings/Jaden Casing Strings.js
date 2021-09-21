// eslint-disable-next-line no-extend-native
String.prototype.toJadenCase = function toJadenCase() {
  return this.split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
};
const str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase()); // ,"How Can Mirrors Be Real If Our Eyes Aren't Real");
