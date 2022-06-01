import { colorArray } from './data.js';

const changeColor = () => {
  let counter = 0;
  return function (e) {
    if (counter === colorArray.length) counter = 0;
    e.target.style.backgroundColor = colorArray[counter];
    counter++;
  };
};

export { changeColor };
