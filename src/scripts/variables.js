const homesCardsAvailable = document.querySelector('.available');
const search = document.querySelector('.button-lg');
const urlBase = 'https://fe-student-api.herokuapp.com/api/hotels?';

const homesCards = document.querySelector('.homes-cards');
const urlHomes = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

const inputConditions = document.querySelector('.input-conditions');
const inputLabel = document.querySelector('.label-conditions');
const modalConditions = document.querySelector('.main-form-modal');
const downBtnAdults = document.querySelector('.adults-down');
const upBtnAdults = document.querySelector('.adults-up');
const countBtnAdults = document.querySelector('.adults');
const countBtnRooms = document.querySelector('.rooms');
const downBtnRooms = document.querySelector('.rooms-down');
const upBtnRooms = document.querySelector('.rooms-up');
const countBtnChilds = document.querySelector('.childs');
const downBtnChilds = document.querySelector('.childs-down');
const upBtnChilds = document.querySelector('.childs-up');
const addChildInfo = document.querySelector('.modal-list-info');

export {
  homesCards,
  urlHomes,
  inputConditions,
  inputLabel,
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
  homesCardsAvailable,
  search,
  urlBase
};
