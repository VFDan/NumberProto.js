Number.prototype.round = function(decimals) {
  var decimals = decimals || 0;
  var pow = Math.pow(10, -decimals);
  return (decimals >= 0) ? Number(Math.round(this + "e" + decimals) + "e-" + decimals) : (Math.round(this / pow) * pow);
};
Number.prototype.typeOf = function() {
  return (isNaN(this)
    ? NaN
    : this % 1 === 0 ? "Integer" : "Float");
};
Number.prototype.isSafe = function() {
  return (Math.abs(Math.ceil(this)) <= Number.MAX_SAFE_INTEGER);
}
Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};
Number.prototype.isDivisibleBy = function(y) {
  return (this.mod(y) === 0);
}
Number.prototype.length = function() {
  return isNaN(this) ? NaN : (this == Infinity) ? Infinity : this.toString().replace('.', '').replace('-','').length;
}
Number.prototype.factorial = function() {
  return (this.typeOf() !== "Integer" || this <= 0) ? 1 : this * (this - 1).factorial();
}
//Polyfills\\
Number.MAX_SAFE_INTEGER = Math.pow(2, 53) -   1;
