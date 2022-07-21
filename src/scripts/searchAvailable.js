import {countBtnAdults, countBtnRooms, homesCardsAvailable, urlBase} from "./variables.js";
import {createElem} from "./createElem.js";
import {getChildsAges} from "./modal.js";
import {bubbleSort} from "./bubbleSort.js";

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

const urlGenerator = (city, adults, children, rooms) =>
    `${urlBase}search=${city}&adults=${adults}&children=${children}&rooms=${rooms}`;

const getAccommodation = async () => {
    const city = document.querySelector('.input-place')?.value;
    const adults = countBtnAdults.textContent;
    const rooms = countBtnRooms.textContent;
    const children = getChildsAges();
    if (+adults === 0 && children !== null) {
        alert('Children are not allowed to travel without adults!');
        return;
    }
    const response = await fetch(urlGenerator(city, adults, children, rooms));
    const result = await response.json();
    bubbleSort(result);
    renderMatches(result);
};

export {getAccommodation}