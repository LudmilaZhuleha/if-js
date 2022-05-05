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
// Variant2
const randomArr = (length, maxNum) =>
  [...Array(length)].map((item) => Math.floor(Math.random() * maxNum));
const newArr = randomArr(10, 200);

function replaceZero2(arr, find, replace) {
  let arrayStr = arr.map((item) => item.toString());
  let arrayResult = [];
  for (let i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i].includes(find)) {
      arrayResult.push(arrayStr[i].replaceAll(find, replace));
    } else arrayResult.push(+arrayStr[i]);
  }
  return arrayResult;
}
replaceZero2(newArr, '0', 'zero');
