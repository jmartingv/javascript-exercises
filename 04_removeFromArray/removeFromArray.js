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
};

// Do not edit below this line
module.exports = removeFromArray;
