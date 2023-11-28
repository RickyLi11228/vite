

const DOMSelectors ={
  column: document.querySelector(".column"),
  card: document.querySelector(".card"),
  img: document.querySelector(".img"),
  name: document.querySelector(".name"),
  sour: document.querySelector(".sour"),
  sweet: document.querySelector(".sweet"),
  spicy: document.querySelector(".spicy"),
  btn: document.querySelectorAll(".btn"),
  price: document.querySelector(".price"),
  themebtn: document.querySelector(".theme-btn"),
};

function clearfields(){
DOMSelectors.column.innerHTML="";
}
function insertCards(arr){
  arr.forEach((fruits) => {
      DOMSelectors.column.insertAdjacentHTML(
  "beforeend",
  `<div class="column">
  <div class="card">
      <h2 class = "name">${fruits.name}</h2>
      <img src="${fruits.img}" class="img">
      <h3 class = }>${fruits.price}</h3> 
  </div>
  </div> `
  
)});
}
let firstfruits = fruits.filter((fruits) => fruits.taste)
insertCards(firstfruits);
insertCards(fruits);
buttons.forEach((btn)=> btn.addEventListener('click', function(){
let type = btn.textContent.toLowerCase()
let newArr = fruits.filter((fruit) => fruit.taste === type)
clearfields()
insertCards (newArr)
}))
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("blue")) {
    document.body.classList.add("green");
    document.body.classList.remove("blue");
  } else {
    document.body.classList.add("blue");
    document.body.classList.remove("green");
  }
  });