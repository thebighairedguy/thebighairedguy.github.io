const calc = document.getElementById("calc-screen-text");

function display(value) {
  calc.innerHTML += value;
  return value;
}

function solve() {
  let result = eval(calc.innerHTML).toFixed(2);
  calc.innerHTML = result;
}

function clearScreen() {
  calc.innerHTML = "";
}
