Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  };
};

Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  };
  return result;
};

const callback = function(n){
  return n*n;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let start = 0;
  let acc = 0;

  if (initialValue) {
    acc = initialValue;
  } else {
    acc = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++){
    acc = callback(acc, this[i]);
  };
  return acc;
};