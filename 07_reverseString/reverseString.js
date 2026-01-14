const reverseString = function (string) {
  let arr = string.split("");
  let temp = "";
  for (let i = string.length - 1; i >= 0; i--) {
    temp += arr[i];
  }
  return temp;
};

// Do not edit below this line
module.exports = reverseString;
