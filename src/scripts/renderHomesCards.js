import {createElem} from "./createElem.js";
import {homesCards} from "./variables.js";

const renderHomes = (data) => {
    data.forEach(({ name, city, country, imageUrl }) => {
        const homesCard = createElem('div', {
            className: 'homes-card swiper-slide',
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
        homesCards.append(homesCard);
    });
};
const getHomesData = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        renderHomes(result);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
};

export {getHomesData}