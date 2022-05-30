//Create a function that finds unique countries with all matching cities in these countries
const findUniqueCountries = (array) => {
    const arrayUnique = array.reduce((acc, item) => {
        acc[item.country] = acc[item.country] || [];
        acc[item.country].push(item.city);
        return acc;
    }, {});
    return arrayUnique;
};
export {findUniqueCountries};