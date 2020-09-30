
exports.min = function min (array) {
  if (array)
    return array.reduce( (p, v) => p < v ? p : v , 0);
  return 0
}

exports.max = function max (array) {
  if (array)
    return array.reduce( (p, v) => p > v ? p : v , 0);
  return 0;
}

exports.avg = function avg (array) {
  if (array){
    if (array.length != 0)
      return array.reduce( (p, v) => p + v , 0)/array.length;
    }
  return 0;
}
