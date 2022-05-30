import { hotels, data } from "./data/data.js";

//Create function checking palindrome string for true/false
const palindrome = (str) => str === str.split('').reverse().join('');

console.log(palindrome('molom'));

//Create a function that receives an array and a string and checks if there are any matches of string in any array
// value. The function should return a string with all findings if any.
const searchMatches = (arr, str) => {
  if(Boolean(!str) || typeof str !== 'string') return `Data input error`;
  const newArr = [];
  arr.forEach((item) => {
    const hotelItem = Object.values(item).join('').toLowerCase();
    if (hotelItem.includes(str)) newArr.push(item);
    })
  return !newArr.length ? `Sorry, no matches found! Try another destination`: newArr;
}
console.log(searchMatches(data, 'rus'));

//Create a function that finds unique countries with all matching cities in these countries
const findUniqueCountries = (array) => {
  const arrayUnique = array.reduce((acc, item) => {
    acc[item.country] = acc[item.country] || [];
    acc[item.country].push(item.city);
    return acc;
  }, {});
  return arrayUnique;
};

console.log(findUniqueCountries(hotels));

//Create a function getCalendarMonth, which receives parameters:
//daysInMonth =30,
//daysInWeek =7,
//weeksInMonth=5,
//and any day in week from 0 to 6 to start the month from.
//The function should return the array of arrays illustrating calendar month.

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (
    typeof daysInMonth !== 'number' ||
    typeof daysInWeek !== 'number' ||
    typeof dayOfWeek !== 'number' ||
    dayOfWeek > 7
  )
    return 'Data input failure';
  const arr = [];
  let counter = daysInMonth - dayOfWeek + 1;
  for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for (let j = 0; j < daysInWeek; j++) {
      if (counter === 31) counter = 1;
      arr[i][j] = 1;
      arr[i][j] = counter++;
    }
  }
  return arr;
};
console.log(getCalendarMonth(30, 7, 1));

export { findUniqueCountries, palindrome, getCalendarMonth };
