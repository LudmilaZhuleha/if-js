import {findUniqueCountries} from "../src/data/findunique.js";
import {hotels} from "../src/data/data.js";

describe('tests for findUniqueCountries', ()=>{
     test('function should be defined', ()=>{
         expect(findUniqueCountries(hotels)).not.toBe(undefined);
     });
    test('function findUniqueCountries should return the result', ()=> {
        const result = {Russia:['Saint Petersburg']}
        expect(findUniqueCountries(hotels)).toStrictEqual(result);
    })
})