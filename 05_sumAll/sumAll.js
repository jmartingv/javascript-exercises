const sumAll = function (start, end) {
  // Initialize sum variable
  let sum = 0;

  // Check if any argument is negative
  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  // Check if any argument is not a number
  if (typeof start != 'number' || typeof end != 'number') {
    return 'ERROR';
  }

  // If first number is larger, go backwards
  if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
  } else {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
