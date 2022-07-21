import {addChildInfo, countBtnAdults, countBtnChilds, countBtnRooms, inputLabel, modalConditions} from "./variables.js";
import {createElem} from "./createElem.js";

function openModal() {
    modalConditions.style.display = 'block';
}
function closeModal() {
    modalConditions.style.display = 'none';
}

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

const showConditions = () => {
    return (inputLabel.textContent = `${countBtnAdults.textContent} Adults - ${countBtnChilds.textContent} Children - ${countBtnRooms.textContent} Rooms`);
};

function createChildSelect() {
    const extraChild = createElem('select', {
        className: 'modal-age-select',
    });
    extraChild.innerHTML = `
  <option value="0" selected>0 years old</option>
  <option value="1">1 year old</option>
  <option value="2">2 years old</option>
  <option value="3">3 years old</option>
  <option value="4">4 years old</option>
  <option value="5">5 years old</option>
  <option value="6">6 years old</option>
  <option value="7">7 years old</option>
  <option value="8">8 years old</option>
  <option value="9">9 years old</option>
  <option value="10">10 years old</option>
  <option value="11">11 years old</option>
  <option value="12">12 years old</option>
  <option value="13">13 years old</option>
  <option value="14">14 years old</option>
  <option value="15">15 years old</option>
  <option value="16">16 years old</option>
  <option value="17">17 years old</option>
  `;
    addChildInfo.append(extraChild);
}
const getChildsAges = () => {
    const select = document.querySelectorAll('.modal-age-select');
    if (select.length === 0) return '0';
    const result = [];
    select.forEach((item) => {
        result.push(item.value);
    });
    return result.join(',');
};
export {createChildSelect, openModal, closeModal, counterPlus, counterMinus, showConditions, getChildsAges}