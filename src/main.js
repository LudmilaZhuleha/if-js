// Function sum(x)(y)
export const sum = (x) => {
  return (y) => {
    return x + y;
  };
}
sum(3)(7);

// Color the paragraphs into different colors using 'click'.
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colorArray = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function changeColor() {
  let counter = 0;
  return function (e) {
    if (counter === colorArray.length) counter = 0;
    e.target.style.backgroundColor = colorArray[counter];
    counter++;
  }
}
text1.onclick = changeColor();
text2.onclick = changeColor();
text3.onclick = changeColor();


