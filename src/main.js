const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    this.counter = 0;
    return this; // ваш код
  },
  next() {
    if (this.current === undefined) {
      this.current = this.counter;
    }
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    } else {
      delete this.current;
      this.current = 0;
      return {
        done: false,
        value: this.data[this.current++],
      };
    }
  },
};

function changeColor(colors) {
  return function (event) {
    event.target.style.backgroundColor = colors.next().value;
  };
}
const ids = document.querySelectorAll('p');

for (let i = 0; i < ids.length; i++) {
  ids[i].addEventListener('click', changeColor({ ...colors }));
}
