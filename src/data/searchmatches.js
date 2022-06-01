import {data} from "./data.js"

//Create a function that receives an array and a string and checks if there are any matches of string in any array
// value. The function should return a string with all findings if any.
const searchMatches = (arr, str) => {
  if (Boolean(!str) || typeof str !== 'string') return `Data input error`;
  const newArr = [];
  str = str[0].toUpperCase() + str.slice(1);
  arr.filter((item) => {
    if (item.country.includes(str) || item.city.includes(str) || item.hotel.includes(str)) {
      newArr.push(item);
    }
  });
  if (newArr.length === 0) {
    return `Sorry, no matches found! Try another destination`;
  }
  return newArr;
};
console.log(searchMatches(data, 'berlin'))

export { searchMatches };
