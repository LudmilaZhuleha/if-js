//Create function checking palindrome string for true/false
const palindrome = (str) => str === str.split('').reverse().join('');

console.log(palindrome('molom'));

//Create a function that finds unique countries with all matching cities in these countries
 const findUniqueCountries = (array) =>{
   const arrayUnique = array.reduce((acc, item)=>{
     acc[item.country]=acc[item.country] || [];
     acc[item.country].push(item.city);
     return acc;
   },{})
   return arrayUnique;
 }
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
   }]
console.log(findUniqueCountries(hotels));

export { findUniqueCountries, palindrome };
