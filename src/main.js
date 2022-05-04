// //Variables
//
// let user = 'Dow Jones';
// console.log(user);
//
// let student = 'Ludmila Zhuleha';
// user = student;
// console.log(user); //Ludmila Zhuleha
//
// let test = 1;
// test++;
// test = test + '1';
// console.log(test); // 21
//
// test = test - 1;
// console.log(test); // 20
//
// console.log(Boolean(test)); //true
// console.log(!!test); // true
//
// //Multiply the elements of array
// let arr = [2, 3, 5, 8];
// let result = 1;
// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// console.log(result);
//
// // Console.log the array elements that are more than 5 but less than 10
// let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] > 5 && arr2[i] < 10) {
//     console.log(arr2[i]);
//   }
// }
//
// // Console.log only even elements of the array
// let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr3.length; i++) {
//   if (arr3[i] % 2 == 0) {
//     console.log(arr3[i]);
//   }
// }
// //alternative
// for (let i = 0; i < arr3.length; i++) {
//   if ((arr3[i] & 1) == 0) {
//     console.log(arr3[i]);
//   }
// }

// Check if the word is palindrome
const isPalindrome = (str) => str === str.split('').reverse().join('');
isPalindrome('salas');

const isPalindrome2 = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
isPalindrome2('Salas');

//Create a function min(a,b)
const minNum = (a, b) => (a > b ? b : a);
minNum(2, 10);

//Create a function max(a,y)
const maxNum = (a, y) => (a > y ? a : y);
maxNum(80, 4);

//Create an array of 10 elements. Every element is a random number from 0 to 100. If an element contains 0, replace
// 0 for string 'zero'.
const randomArray = function (...restNumbers) {
  restNumbers[0] = Math.floor(Math.random() * 100);
  restNumbers[1] = Math.floor(Math.random() * 100);
  restNumbers[2] = Math.floor(Math.random() * 100);
  restNumbers[3] = Math.floor(Math.random() * 100);
  restNumbers[4] = Math.floor(Math.random() * 100);
  restNumbers[5] = Math.floor(Math.random() * 100);
  restNumbers[6] = Math.floor(Math.random() * 100);
  restNumbers[7] = Math.floor(Math.random() * 100);
  restNumbers[8] = Math.floor(Math.random() * 100);
  restNumbers[9] = Math.floor(Math.random() * 100);
  return restNumbers;
};

let newArray = randomArray();

function replaceZero(arr, find, replace) {
  let arrayStr = arr.map((item) => item.toString());
  let arrayResult = [];
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] % 10 === 0) {
      arrayResult.push(arrayStr[i].replace(find, replace));
    } else arrayResult.push(+arrayStr[i]);
  }
  return arrayResult;
}
replaceZero(newArray, '0', 'zero');
