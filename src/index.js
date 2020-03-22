const isArrayInvalid = (array) => {
  return (!array || !array.length);
};

exports.min = function min(array) {
  return (isArrayInvalid(array)) ? 0 : Math.min(...array);
};

exports.max = function max(array) {
  return (isArrayInvalid(array)) ? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
  return (isArrayInvalid(array)) ? 0 : 
    array.reduce((previousItem, currentItem) => {
      return (previousItem + currentItem);
    }, 0) / array.length;
};