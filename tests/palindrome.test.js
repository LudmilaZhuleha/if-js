import {palindrome} from "../src/main.js";

describe('tests for palindrome function', ()=>{
    test('palindrome function should be defined', ()=>{
        const str = 'focus'
        expect(palindrome(str)).not.toBe(undefined);
    })
    test('palindrome function should return false', ()=>{
        const str = 'focus'
        expect(palindrome(str)).toBeFalsy();
    })
})