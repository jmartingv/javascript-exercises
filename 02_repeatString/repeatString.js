const repeatString = function (str, num) {
  // Initialize empty string
  let finalStr = '';

  // If number is negative, return error
  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < num; i++) {
    // Add str argument to the finalStr variable, repeat until "num" times
    finalStr += str;
  }

  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
