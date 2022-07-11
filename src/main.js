const homesCards = document.querySelector('.homes-cards');

const createElement = (tagName, className) => {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
};

const url = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const render = (data) => {
  data.forEach((item) => {
    const { name, city, country, imageUrl } = item;
    const homesCard = createElement('div', 'homes-card');
    const img = createElement('img', 'homes-image');
    img.src = imageUrl;
    img.alt = `${name}`;
    img.width = '295';
    img.height = '295';

    const title = createElement('h3', 'homes-image-name');
    title.textContent = `${name}`;

    const location = createElement('p', 'homes-image-location');
    location.textContent = `${city}, ${country}`;

    homesCard.append(img, title, location);
    homesCards.append(homesCard);
  });
};
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    render(result);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
getData(url);
