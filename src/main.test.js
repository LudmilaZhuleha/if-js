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


const changeColor = () =>{
    let counter = 0;
    return function (e) {
        if (counter === colorArray.length) counter = 0;
        e.target.style.backgroundColor = colorArray[counter];
        counter++;
    }
}
describe('tests for changeColor', ()=>{
        document.body.innerHTML =
            '<p id="text1">'+'Text1'+'</p>'
            '<p id="text2">'+'Text2'+'</p>'
            '<p id="text3">'+'Text3'+'</p>' ;
        const colorArray = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']
        const text1 = document.getElementById('text1')
        const text2 = document.getElementById('text2')
        const text3 = document.getElementById('text3')
        const elems = [text1, text2, text3]

    test('color magenta', async()=>{
        for(let i=0; i<elems.length; i++){
            elems[i].click();
            changeColor(elems[i]);
            const color = elems[i].style.backgroundColor;
            expect(color).toBe('magenta');
        }
    })
})
