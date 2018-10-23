Number.prototype.discount = function(percent) {
  return (this - this * (percent / 100)).round(2);
};
Number.prototype.tax = function(percent) {
  return (this + this * (percent/100)).round(2);
}