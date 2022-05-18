const searchMatches = (arr, str) => {
    if(Boolean(!str) || typeof str !== 'string') return `Data input error`;
    const newArr = [];
    str = str[0].toUpperCase() + str.slice(1);
    arr.filter((item) => {
        if (item.country === str || item.city === str || item.hotel === str) {
            newArr.push(item);
        }
    });
    if (newArr.length === 0) {
        return `Sorry, no matches found! Try another destination`
    }
    return newArr;
}

describe('tests for searchMatches function',()=>{
    test('the function should return something (to be defined)',()=>{
        expect(searchMatches()).toBe(undefined)
    })
    test('the function should return an array with a string',()=>{
        const data = [
            {
                country: 'Russia',
                city: 'Saint Petersburg',
                hotel: 'Hotel Leopold',
            }
            ]
        const string = 'russia'
        const result = [{'country': 'Russia', 'city': 'Saint Petersburg', 'hotel': 'Hotel Leopold'}]
        expect(searchMatches(data, string)).toStrictEqual(result)
    })

    test('the function should return `Data input error`', ()=> {
        const data = [
            {
                country: 'Russia',
                city: 'Saint Petersburg',
                hotel: 'Hotel Leopold',
            }
        ]
        const string = 23
        const result = `Data input error`
        expect(searchMatches(data, string)).toStrictEqual(result)
    })

    test('the function should return `not found`',()=>{
        const data = [
            {
                country: 'Russia',
                city: 'Saint Petersburg',
                hotel: 'Hotel Leopold',
            }
        ]
        const string = 'berlin'
        const result = `Sorry, no matches found! Try another destination`
        expect(searchMatches(data, string)).toStrictEqual(result)
    })
})