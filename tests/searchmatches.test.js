import {data} from "../src/data/data.js"
import {searchMatches} from "../src/data/searchmatches";

describe('tests for searchMatches function',()=>{
    test('the function should return something (to be defined)',()=>{
        expect(searchMatches()).not.toBe(undefined)
    })
    test('the function should return an array with a string',()=>{
        const string = 'russia'
        const result = [{'country': 'Russia', 'city': 'Saint Petersburg', 'hotel': 'Hotel Leopold'}]
        expect(searchMatches(data, string)).toStrictEqual(result)
    })

    test('the function should return `Data input error`', ()=> {
        const string = 23
        const result = `Data input error`
        expect(searchMatches(data, string)).toStrictEqual(result)
    })

    test('the function should return `not found`',()=>{
        const string = 'berlin'
        const result = `Sorry, no matches found! Try another destination`
        expect(searchMatches(data, string)).toStrictEqual(result)
    })
})