const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function (args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }

  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num > 0) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
