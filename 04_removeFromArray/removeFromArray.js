const removeFromArray = function (arr, ...args) {
  // Loop through all the arguments provided after the array
  for (item of args) {
    // If one or more of the arguments is not included in the array, ignore it
    if (!arr.includes(item)) {
      continue;
    }

    // Get the index of the provided item
    let index = arr.indexOf(item);

    // Remove the item at that index
    arr.splice(index, 1);
  }
  return arr;

  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.

  // var removeFromArray = function(...args) {
  //   const array = args[0]
  //   return array.filter(val => !args.includes(val))
  // }
  //
};

// Do not edit below this line
module.exports = removeFromArray;
