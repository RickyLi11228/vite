import "../style.css";
import {fruits} from "./fruits";

const DOMSelectors = {
    column: document.querySelector(".column"),
    btn: document.querySelectorAll(".btn"),
    themeBtn: document.querySelector('.theme-btn'),
    sour: document.querySelector('.sour'),
    sweet: document.querySelector('.sweet'),
    spicy: document.querySelector('.spicy')
}

function clearfields(){
    DOMSelectors.column.innerHTML="";
}

function insertCards(arr){
    arr.forEach((fruits) => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class = "name">${fruits.name}</h3>
                <img src="${fruits.img}" class="img">
                <h4>Price: ${fruits.price}</h4> 
            </div>`
        )
    });
}

let firstfruits = fruits.filter((fruits) => fruits.taste != null);
insertCards(firstfruits);

DOMSelectors.sweet.addEventListener('click', function() {
    let newArr = fruits.filter((fruit) => fruit.taste === 'sweet');
    clearfields();
    insertCards(newArr);
});

DOMSelectors.sour.addEventListener('click', function() {
    let newArr = fruits.filter((fruit) => fruit.taste === 'sour');
    clearfields();
    insertCards(newArr);
});

DOMSelectors.spicy.addEventListener('click', function() {
    let newArr = fruits.filter((fruit) => fruit.taste === 'spicy');
    clearfields();
    insertCards(newArr);
});

document.querySelector(".theme-btn").addEventListener("click", function () {
    if (document.body.classList.contains("blue")) {
      document.body.classList.add("green");
      document.body.classList.remove("blue");
    } else {
      document.body.classList.add("blue");
      document.body.classList.remove("green");
    }
  });