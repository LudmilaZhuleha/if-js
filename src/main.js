import {search, urlHomes} from "./scripts/variables.js";
import {getAccommodation} from './scripts/searchAvailable.js'
import {getHomesData} from "./scripts/renderHomesCards.js";
import {swiper} from "./scripts/swiper.js";

getHomesData(urlHomes);

search.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.homes-available').classList.remove('hide');
  getAccommodation();
});
