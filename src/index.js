import {Wishlist} from './wishlist.js'

const form = document.querySelector('form')
const make = document.querySelector('#makeInput')
const model = document.querySelector('#modelInput')
const year = document.querySelector('#yearInput')
const makeP = document.querySelector('#car-make')
const modelP = document.querySelector('#car-model')
const yearP = document.querySelector('#car-year')
const removeBtn = document.querySelector('.removeBtn')
const list = document.querySelector('ul')


console.log("Hello World");
// TODO

let wishlist = new Wishlist();

form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    makeP.textContent = car.make;
    modelP.textContent = car.model;
    yearP.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    make.value = "";
    model.value = "";
    year.value = "";
    list.innerHTML = "";
    for (let i = 0; i < wishlist.list.length; i++) {
      let newList = document.createElement("li");
      newList.textContent = `${wishlist.list[i].make} ${wishlist.list[i].model}`;
      newList.addEventListener("click", () => showCarDetails(wishlist.list[i]));
      list.appendChild(newList);
    }
}

function addCar(e) {
    e.preventDefault();
    let getCarMakeVal = make.value;
    let getCarModelVal = model.value;
    let getCarYearVal = year.value;
    wishlist.add(getCarMakeVal, getCarModelVal, getCarYearVal);
    updateDOMList();
  }
  
  function removeCar() {
    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    makeP.textContent = "";
    modelP.textContent = "";
    yearP.textContent = "";
    removeBtn.disabled = true;
  }