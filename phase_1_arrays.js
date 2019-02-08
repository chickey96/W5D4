Array.prototype.uniq = function() {
  let result = [];
  for(let i = 0; i < this.length; i++){
    let match = false;
    for(let j = 0; j < result.length; j++){
      if (result[j] === this[i]){
        match = true;
        break;
      };
    };
    if (!match){
      result.push(this[i]);
    };
  };
  return result;
};

Array.prototype.twoSum = function() {
  const result = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i; j < this.length; j++){
      if (this[i] + this[j] === 0){
        if (i !== j){
          result.push([i, j]);
        };
      };
    };
  };
  return result;
};

Array.prototype.transpose = function () {
  const result = [];
  for (let k=0; k < this[0].length; k++) {
    result.push([]);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      result[j][i] = this[i][j];
    };
  };
  
  return result;
};