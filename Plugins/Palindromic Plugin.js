Number.prototype.reverse = function() {
  return Number(this.toString().split('').reverse().join(''));
}
Number.prototype.isPalindromic = function() {
  return Number(this) === this.reverse();
}
