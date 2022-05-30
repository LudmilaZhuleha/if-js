/**
 * @jest-environment jsdom
 */
import { changeColor } from "../src/data/changeColor.js";

describe('tests for changeColor', ()=>{

    test('color magenta', async()=>{
        expect(changeColor()).not.toBe(undefined)
    })
})
