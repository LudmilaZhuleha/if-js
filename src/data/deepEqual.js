import { obj1, obj2, obj3 } from './data.js';

// Create a deepEqual function, which compares objects. Assume and check that (obj1===obj2)//true, (obj1===obj3)//false
function deepEqual(object1, object2) {
    if (typeof object1 !== 'object' || typeof object2 !== 'object') return false;
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    if (Object.values(object1).length !== Object.values(object2).length) return false;

    for (let i = 0; i < Object.keys(object1).length; i++) {
        if (Object.keys(object1).sort()[i] !== Object.keys(object2).sort()[i]) return false;
    }

    const equal = Object.values(object1).every((item) => object1[item] === object2[item]);
    if (!equal) return false;
    return true;
}
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj2, obj3));
