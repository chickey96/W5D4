Array.prototype.bubbleSort = function () {
  let unsorted = true;
  while (unsorted){
    unsorted = false;
    for (let i=0; i<this.length-1; i++){
      for (let j=i+1; j<this.length; j++) {
        if (this[i] > this[j]) {
          unsorted = true;
          const temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        };
      };
    };
  };
  return this;
};

String.prototype.substrings = function() {
  let result = [];
  for (let i=0; i<this.length; i++) {
    for (let j=i+1; j<this.length+1; j++) {
        result.push(this.slice(i, j));
    };
  };
  return result;
};

const range = (start, end) => {
  let result = [start];
  start++;
  if (start > end){
    return [];
  }
  return result.concat(range(start, end));
};

const sumRec = (arr) => {
  if (arr.length === 0) { return 0 };
  let sum = arr[0];
  return sum + sumRec(arr.slice(1,arr.length+1));
};

const exponent = (base, exp) => {
  if (exp === 0) { return 1 };
  if (exp > 0) {
    return base * exponent(base, exp-1);
  } else {
    return 1 / base * exponent(base, exp+1);
  };
};

const fibonacci = (n) => {
  if (n===1) {return [1]};
  if (n===2) {return [1,1]};
  let previous = fibonacci(n-1);
  let last = previous[previous.length-2] + previous[previous.length-1];
  previous.push(last);
  return previous;
};

const deepDup = (arr) => {
  let result = []
  if (arr.length === 0) {return []};
  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
      result.push(deepDup(arr[i]));
    }else {
      result.push(arr[i]);
    };
  };
  return result;
};

const bsearch = (arr, target) => {
  if (arr.length === 0) {return -1};
  const mid = Math.round(arr.length /2);
  if (arr[mid] === target){
    return mid;
  };
  switch (target < arr[mid]) {
    case true:
      return bsearch(arr.slice(0, mid), target);
    default: 
      let result = bsearch(arr.slice(mid, arr.length+1), target);
      if (result === -1) {return -1};
      return result + mid;
  }; 
};

const mergesort = (arr) => {
  if (arr.length === 1) { return arr };
  if (arr.length === 0) { return arr };
  const mid = Math.round(arr.length/2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid, arr.length));
  return merge(left, right);
};

const merge = (left, right) => {
  const res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]){
      res.push(left.shift());
    } else {
      res.push(right.shift());
    };
  }; 
  debugger;
  res.concat(left);
  res.concat(right);
  return res;
};