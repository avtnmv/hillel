function createSumFunction() {
    let total = 0;
  
    return function (value) {
      total += value;
      return total;
    };
  }
  const sum = createSumFunction();

