import { dataHomes } from './data/data.js';

// Create a function that sort the array of objects from A to Z according to field 'name'
const bubbleSort = (data) => {
  for (let j = data.length - 1; j > 0; j--) {
    // let arr =[];
    for (let i = 0; i < j; i++) {
      if (data[i].name > data[i + 1].name) {
        const swap = data[i];
        data[i] = data[i + 1];
        data[i + 1] = swap;
      }
    }
    // arr.push(data);
    //   return arr.flat();
  }
};
console.log(bubbleSort(dataHomes));
console.log(dataHomes);

//
const homesCardsAvailable = document.querySelector('.available');
const countBtnAdults = document.querySelector('.adults');
const countBtnRooms = document.querySelector('.rooms');
const search = document.querySelector('.button-lg');
const urlBase = 'https://fe-student-api.herokuapp.com/api/hotels?';

const urlGenerator = (city, adults, children, rooms) =>
  `${urlBase}search=${city}&adults=${adults}&children=${children}&rooms=${rooms}`;

const createElem = (tagName, attributes) => {
  const elem = document.createElement(tagName);
  Object.assign(elem, attributes);
  return elem;
};

const renderMatches = (data) => {
  homesCardsAvailable.innerHTML = '';

  data.forEach((item) => {
    const { name, country, city, imageUrl } = item;
    const homesCard = createElem('div', {
      className: 'homes-card',
    });
    const img = createElem('img', {
      className: 'homes-image',
      src: imageUrl,
      alt: `${name}`,
      width: '295',
      height: '295',
    });
    const title = createElem('h3', {
      className: 'homes-image-name',
      textContent: `${name}`,
    });
    const location = createElem('p', {
      className: 'homes-image-location',
      textContent: `${city}, ${country}`,
    });
    homesCard.append(img, title, location);
    homesCardsAvailable.append(homesCard);
  });
};

const getChildsAges = () => {
  const select = document.querySelectorAll('.modal-age-select');
  if (select.length === 0) return '0';
  const result = [];
  select.forEach((item) => {
    result.push(item.value);
  });
  return result.join(',');
};

const getAccommodation = async () => {
  const city = document.querySelector('.input-place')?.value;
  const adults = countBtnAdults.textContent;
  const rooms = countBtnRooms.textContent;
  const children = getChildsAges();
  if(+adults === 0 && children !== null) {
    alert('Children are not allowed to travel without adults!');
    return;
  }
  const response = await fetch(urlGenerator(city, adults, children, rooms));
  const result = await response.json();
  bubbleSort(result);
  renderMatches(result);
};

search.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.homes-available').classList.remove('hide');
  getAccommodation();
});
