//Create function converting string '2020-11-26' into '26.11.2020'

const reversedStr = (str, separator, joiner) => {
  return str.split(separator).reverse().join(joiner);
};
reversedStr('2020-11-26', '-', '.');

//Create a function that searches the array for string input and console.log the found string city, country, hotel

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
    return 'Sorry, no matches found! Try another destination';
  }
  return newArr;
};
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
];
console.log(searchMatches(data, 'rus'));
