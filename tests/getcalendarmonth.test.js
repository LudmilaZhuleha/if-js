import { getCalendarMonth } from "../src/main.js";

describe('tests for getCalendarMonth function', ()=>{
    test('function should be defined', ()=>{
        expect(getCalendarMonth(5,7,2)).not.toBe(undefined);
    })
    test('test checking the error if dayOfWeek data input is more than 7 ', ()=> {
        const input = 10;
        const expectedResult = 'Data input failure';
        expect(getCalendarMonth(5,7, input)).toStrictEqual(expectedResult);
    })
})