// const removeFromArray = function (arr, ...arg) {
//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;
//     for (let j = 0; j < arg.length; j++) {
//       if (arr[i] === arg[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (exists) {
//       arr.splice(i, 1);
//       i--;
//       //   break;
//     }
//   }
//   return arr;
// };
const removeFromArray = (arr, ...args) =>
  arr.filter((item) => !args.includes(item));
// Do not edit below this line
module.exports = removeFromArray;
