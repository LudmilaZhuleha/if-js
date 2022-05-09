// Function sum(x)(y)
const sum = (x) => {
  return (y) => {
    return x + y;
  };
};
sum(10)(5);

// Color the paragraphs into different colors using 'click'.
const firstPara = document.getElementById('text1');
const secondPara = document.getElementById('text2');
const thirdPara = document.getElementById('text3');

firstPara.onclick = (e) => {
  const colorArray = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  let counter = 0;
  e.target.onclick = () => {
    if (counter === colorArray.length) {
      counter = 0;
    }
    e.target.style.backgroundColor = colorArray[counter];
    counter++;
  };
};
secondPara.onclick = (e) => {
  const colorArray = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  let counter = 0;
  e.target.onclick = () => {
    if (counter === colorArray.length) {
      counter = 0;
    }
    e.target.style.backgroundColor = colorArray[counter];
    counter++;
  };
};
thirdPara.onclick = (e) => {
  const colorArray = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  let counter = 0;
  e.target.onclick = () => {
    if (counter === colorArray.length) {
      counter = 0;
    }
    e.target.style.backgroundColor = colorArray[counter];
    counter++;
  };
};
// firstPara.onclick = (e)=> {
//     e.target.style.backgroundColor = colorArray[0];
//     document.getElementById('text1').onclick = (e) => {
//         e.target.style.backgroundColor = colorArray[1];
//         document.getElementById('text1').onclick = (e) => {
//             e.target.style.backgroundColor = colorArray[2];
//             document.getElementById('text1').onclick = (e) => {
//                 e.target.style.backgroundColor = colorArray[3];
//                 document.getElementById('text1').onclick = (e) => {
//                     e.target.style.backgroundColor = colorArray[4];
//                 }
//             }
//         }
//     }
// }
