//Create function checking palindrome string for true/false
const palindrome = (str) => str === str.split('').reverse().join('');

export {palindrome};