const leapYears = function (year) {
  // Leap years are divisible by 4 and 400
  if (year % 4 == 0 && year % 400 == 0) {
    return true;
  } else if (year % 4 == 0 && year % 100 != 0) {
    // Years divisible by 4 but not by 100 are leap years
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
