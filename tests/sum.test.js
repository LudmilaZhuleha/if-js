const sum = (x) => {
    return (y) => {
        return x + y;
    };
};

describe('sum function tests', ()=>{
    test('x+y should make the sum', ()=>{
        expect(sum(3)(4)).toBe(7)
    })
    test('if only x the sum should return x', ()=>{
        expect(sum(3)()).not.toBeGreaterThan(3)
    })
})



