const searchMatches = (arr, str) => {
    if(Boolean(!str) || typeof str !== 'string') return `Data input error`;
    const newArr = [];
    str = str[0].toUpperCase() + str.slice(1);
    arr.filter((item) => {
        if (item.country === str || item.city === str || item.hotel === str) {
            newArr.push(item);
            console.log(`${item.city}, ${item.country}, ${item.hotel}`);
        }
    });
    if (newArr.length === 0) {
        console.log('Sorry, no matches found! Try another destination');
    }
}

describe('tests for searchMatches function',()=>{
    test('the function should return something (to be defined)',()=>{
        expect(searchMatches()).toBe(undefined)
    })
    test('the function should return a string',()=>{
        const data = [
            {
                country: 'Russia',
                city: 'Saint Petersburg',
                hotel: 'Hotel Leopold',
            },
            {
                country: 'Russia',
                city: 'Saint Petersburg',
                hotel: 'Hotel Leopold',
            }
            ]
        const string = 'russia'
        const result = 'Saint Petersburg, Russia, Hotel Leopold'
        expect(searchMatches(data, string)).toBe(result)
    })
})