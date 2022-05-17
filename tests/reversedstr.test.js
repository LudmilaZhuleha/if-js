const reversedStr = (str, separator, joiner) => str.split(separator).reverse().join(joiner);

describe('tests for reversedStr function', ()=>{
    test('given string should return something (to be defined)',()=>{
        expect(reversedStr('2020-11-26', '-', '.')).not.toBe(undefined)
    })

    test('given string should return 26.11.2020',()=>{
        expect(reversedStr('2020-11-26', '-', '.')).toBe('26.11.2020')
    })
})
