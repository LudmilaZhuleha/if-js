import {findUniqueCountries} from "../src/main.js";

describe('tests for findUniqueCountries', ()=>{
     test('function should be defined', ()=>{
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
             }]

         expect(findUniqueCountries(hotels)).not.toBe(undefined);
     });
    test('function findUniqueCountries should return the result', ()=> {
        const hotels = [
            {
                name: 'Hotel Leopold',
                city: 'Saint Petersburg',
                country: 'Russia',
            }]
        const result = {Russia:['Saint Petersburg']}
        expect(findUniqueCountries(hotels)).toStrictEqual(result);
    })
})