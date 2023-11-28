document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("blue")) {
    document.body.classList.add("green");
    document.body.classList.remove("blue");
  } else {
    document.body.classList.add("blue");
    document.body.classList.remove("green");
  }
});
import "../css/style.css"
import {fruits} from './array'
import { DOMSelectors } from "./dom"


function clearfields(){
  DOMSelectors.container.innerHTML="";
}
function insertCards(arr){
    arr.forEach((x) => {
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="column">
    <div class="card">
        <h2 class = "name">${x.name}</h2>
        <img src="${x.img}" class="img">
        <h3 class = }>${x.taste}</h3> 
    </div>
    </div> `
    
)})};
insertCards(fruits);
buttons.forEach((btn)=> btn.addEventListener('click', function(){
  let type = btn.textContent.toLowerCase()
  let newArr = fruits.filter((fruit) => fruit.taste === type)
  clearfields()
  insertCards (newArr)
}))