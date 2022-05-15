const reverseString = function (str) {
  // Split string, reverse the resulting array and re-join into a new string
  let reversedString = str.split('').reverse().join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
