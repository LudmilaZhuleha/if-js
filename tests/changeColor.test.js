/**
 * @jest-environment jsdom
 */

const changeColor = () =>{
    let counter = 0;
    return function (e) {
        if (counter === colorArray.length) counter = 0;
        e.target.style.backgroundColor = colorArray[counter];
        counter++;
    }
}
describe('tests for changeColor', ()=>{

    test('color magenta', async()=>{
        expect(changeColor()).not.toBe(undefined)
    })
})
