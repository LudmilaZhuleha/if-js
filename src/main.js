//Create function checking palindrome string for true/false
const palindrome = (str) => str === str.split('').reverse().join('');

console.log(palindrome('molom'));

//Create a function that finds unique countries with all matching cities in these countries
const findUniqueCountries = (array) => {
  const arrayUnique = array.reduce((acc, item) => {
    acc[item.country] = acc[item.country] || [];
    acc[item.country].push(item.city);
    return acc;
  }, {});
  return arrayUnique;
};
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
];
console.log(findUniqueCountries(hotels));

//Create a function getCalendarMonth, which receives parameters:
//daysInMonth =30,
//daysInWeek =7,
//weeksInMonth=5,
//and any day in week from 0 to 6 to start the month from.
//The function should return the array of arrays illustrating calendar month.

const getCalendarMonth = (weeksInMonth, daysInWeek, dayOfWeek) => {
  if (
    typeof weeksInMonth !== 'number' ||
    typeof daysInWeek !== 'number' ||
    typeof dayOfWeek !== 'number' ||
    dayOfWeek > 7
  )
    return 'Data input failure';
  const arr = [];
  let counter = 30 - dayOfWeek + 1;
  for (let i = 0; i < weeksInMonth; i++) {
    arr[i] = [];
    for (let j = 0; j < daysInWeek; j++) {
      if (counter === 31) counter = 1;
      arr[i][j] = 1;
      arr[i][j] = counter++;
    }
  }
  return arr;
};
console.log(getCalendarMonth(5, 7, 1));

export { findUniqueCountries, palindrome, getCalendarMonth };
