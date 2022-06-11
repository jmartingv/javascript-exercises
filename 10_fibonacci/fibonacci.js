const fibonacci = function (num) {
  if (num <= 0) {
    return 'OOPS';
  }

  let series = 1;
  let arr = [series];

  for (let i = 0; i < num - 1; i++) {
    if (arr.length == 1) {
      arr.push(1);
    } else {
      arr.push(arr[i] + arr[i - 1]);
    }
  }

  return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
