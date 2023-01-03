import "./styles/style.css" 
import data from '../src/data.js'

const substract = document.querySelector(".substract");
const add = document.querySelector(".add");
const display = document.querySelector(".display");

function displayValue(text = data.getCurrentValue()) {
  display.innerHTML = text;
}

add.addEventListener("click", () => {
  data.addition();
  displayValue();
});

substract.addEventListener("click", () => {
  data.subs();
  displayValue();
});
