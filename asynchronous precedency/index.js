//promise creation hapens synchronoulsly
//promise is created but not executed (with then())
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("this is settimeout inside promise");
//   }, 3000);
// });

// let promise = new Promise((resolve, reject) => resolve());

// promise.then(() => {
//   setTimeout(() => {
//     console.log("this is settimeout inside promise");
//   }, 3000);
// });
// setTimeout(() => {
//   console.log("this is only setTimeout");
// });

let arr = [3, 3, 10, 11, 14, 0, 10];
let goal = 13; // sum of tow numbers from an array
// find the index of both numbers
arr.sort((a, b) => b - a);
console.log(arr);
let left = 0;
let right = arr.length - 1;

// while (left < right) {
//   let sum = arr[left] + arr[right];
//   if (sum == goal) {
//     console.log(left, right);
//     break;
//   }
// }
