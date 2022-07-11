const inputConditions = document.querySelector('.input-conditions');
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

function createChildSelect() {
    const extraChild = document.createElement('select');
    extraChild.classList.add('modal-age-select');
    extraChild.innerHTML = `
  <option value="1" selected>0 years old</option>
  <option value="2">1 year old</option>
  <option value="3">2 years old</option>
  <option value="4">3 years old</option>
  <option value="5">4 years old</option>
  <option value="6">5 years old</option>
  <option value="7">6 years old</option>
  <option value="8">7 years old</option>
  <option value="9">8 years old</option>
  <option value="10">9 years old</option>
  <option value="11">10 years old</option>
  <option value="12">11 years old</option>
  <option value="13">12 years old</option>
  <option value="14">13 years old</option>
  <option value="15">14 years old</option>
  <option value="16">15 years old</option>
  <option value="17">16 years old</option>
  <option value="18">17 years old</option>
  `;
    addChildInfo.append(extraChild);
}

function openModal() {
    modalConditions.style.display = 'block';
}
function closeModal() {
    modalConditions.style.display = 'none';
}
inputConditions.addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
});

window.addEventListener('click', (event) => {
    if (event.target.contains(modalConditions)) closeModal();
});

function counterPlus(item, total) {
    let count = Number(item.innerHTML);
    if (count < total && count >= 0) {
        count++;
        item.innerHTML = count;
    }
}

function counterMinus(item, total) {
    let count = Number(item.innerHTML);
    if (count <= total && count > 0) {
        count--;
        item.innerHTML = count;
    }
}

upBtnAdults.addEventListener('click', (e) => {
    e.preventDefault();
    counterPlus(countBtnAdults, 30);
});

downBtnAdults.addEventListener('click', (e) => {
    e.preventDefault();
    counterMinus(countBtnAdults, 30);
});

upBtnRooms.addEventListener('click', (e) => {
    e.preventDefault();
    counterPlus(countBtnRooms, 30);
});

downBtnRooms.addEventListener('click', (e) => {
    e.preventDefault();
    counterMinus(countBtnRooms, 30);
});
upBtnChilds.addEventListener('click', (e) => {
    e.preventDefault();
    counterPlus(countBtnChilds, 10);

    addChildInfo.style.display = 'block';
    if (countBtnChilds.innerHTML < 10) {
        createChildSelect();
    }
});

downBtnChilds.addEventListener('click', (e) => {
    e.preventDefault();
    counterMinus(countBtnChilds, 10);

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
