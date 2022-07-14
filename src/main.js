const homesCardsAvailable = document.querySelector('.available');
const searchBtn = document.querySelector('.button-lg');
const url = 'https://fe-student-api.herokuapp.com/api/hotels';

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

const filter =(data, val)=>{
  const filteredData = data.filter(
      ({ name, city, country }) => country.includes(val) || city.includes(val) || name.includes(val),
  );
  return filteredData;
}

const filterMatches = async (val) => {
  const data = await fetch(url);
  const response = await data.json();
  renderMatches(filter(response, val));
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const value = document.querySelector('.input-place').value;
  document.querySelector('.homes-available').classList.remove('hide');
  console.log(value);
  filterMatches(value);
});
