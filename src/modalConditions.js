import {inputConditions,
      modalConditions,
      addChildInfo,
      downBtnChilds,
      downBtnAdults,
      downBtnRooms,
      countBtnChilds,
      countBtnAdults,
      countBtnRooms,
      upBtnRooms,
      upBtnAdults,
      upBtnChilds,
} from './scripts/variables.js';
import {createChildSelect, openModal, closeModal, counterPlus, counterMinus, showConditions} from "./scripts/modal.js";

inputConditions.addEventListener('click', (event) => {
  event.preventDefault();
  openModal();
});

window.addEventListener('click', (event) => {
  if (event.target.contains(modalConditions)) closeModal();
});

upBtnAdults.addEventListener('click', (e) => {
  e.preventDefault();
  counterPlus(countBtnAdults, 30);
  showConditions();
});

downBtnAdults.addEventListener('click', (e) => {
  e.preventDefault();
  counterMinus(countBtnAdults, 30);
  showConditions();
});

upBtnRooms.addEventListener('click', (e) => {
  e.preventDefault();
  counterPlus(countBtnRooms, 30);
  showConditions();
});

downBtnRooms.addEventListener('click', (e) => {
  e.preventDefault();
  counterMinus(countBtnRooms, 30);
  showConditions();
});

upBtnChilds.addEventListener('click', (e) => {
  e.preventDefault();
  counterPlus(countBtnChilds, 10);
  showConditions();

  addChildInfo.style.display = 'block';
  if (countBtnChilds.innerHTML < 10) {
    createChildSelect();
  }
});

downBtnChilds.addEventListener('click', (e) => {
  e.preventDefault();
  counterMinus(countBtnChilds, 10);
  showConditions();

  const select = document.querySelectorAll('.modal-age-select');
  for (let i = 0; i < select.length; i++) {
    if (select.length > 0) {
      select[select.length - 1].remove();
      break;
    }
  }

  if (countBtnChilds.innerHTML === '0') {
    addChildInfo.style.display = 'none';
  }
});
