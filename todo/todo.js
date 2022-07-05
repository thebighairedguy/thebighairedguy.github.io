console.log("todo.js loaded.");
//variable declarations

const form = document.forms["task-form"];
const tasksdiv = document.getElementById("tasks-div");
const numberShown = document.getElementById("total-tasks");
const activeButton = document.getElementById("active");
const completedButton = document.getElementById("completed");
const activeButtonColor = getComputedStyle(activeButton).color;
const completedButtonColor = getComputedStyle(completedButton).color;

var Pcompleted = [];
var Pactive = [];

//tg_num will give id to each task line

let tg_num = 0;

//hover functions

function hoverOn(element) {
  element.lastChild.style.display = "block";
}

function hoverOff(element) {
  element.lastChild.style.display = "none";
}

//main functions

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form["task-input"];

  //first x=0. Then, if Completed is on, make x=1, if x=1 then first disable it

  tg_num++;

  tasksdiv.innerHTML += `<div id="task_num_${tg_num}" class="task-line" onmouseenter="hoverOn(this)" onmouseleave="hoverOff(this)" ><div class="checkmark-i"><i class="fa-regular fa-circle" onclick="checktask(this)" name="uncheckedtick"></i></div><p class="task-text-name">${input.value}</p><i class="fa-solid fa-xmark" name="cross" onclick="removetask(this)"></i></div>`;

  Pactive.push(tasksdiv.lastChild);

  //not Pcompleted because we arent changing that here, we are only adding to Pactive here

  console.log(Pactive.length);
  numberShown.innerText = Pactive.length + " items left";

  //Now re-enable Completed if x=1 it was enabled beforehand
});

function removetask(element) {
  //check which array the element is in and delete from array
  for (let x = 0; x < Pactive.length; x++) {
    if (Pactive[x].id == element.parentNode.id) {
      Pactive.splice(x, 1);
    }
  }
  for (let x = 0; x < Pcompleted.length; x++) {
    if (Pcompleted[x].id == element.parentNode.id) {
      Pcompleted.splice(x, 1);
    }
  }

  //delete task line
  element.parentNode.remove();

  console.log(Pactive.length);
  numberShown.innerText = Pactive.length + " items left";
}

function checktask(element) {
  //store element in const for if reference
  const store_element = element.parentNode.parentNode;

  //delete from Pactive and add to Pcompleted
  for (let x = 0; x < Pactive.length; x++) {
    if (Pactive[x].id == store_element.id) {
      //edit css properties of line
      element.parentNode.nextSibling.style.color = "darkgray";
      element.parentNode.nextSibling.style.textDecoration =
        "line-through";

      //add to Pcompleted and remove from Pactive
      Pcompleted.push(element.parentNode.parentNode);
      Pactive.splice(x, 1);

      //lastly change it to tick
      element.parentElement.innerHTML =
        '<i class="fa-solid fa-circle-check" onclick="unchecktask(this)" name="checkedtick"></i>';
    }
  }

  console.log(Pactive.length);
  numberShown.innerText = Pactive.length + " items left";
}

function unchecktask(element) {
  //store element in const for if reference
  const store_element = element.parentNode.parentNode;

  //delete from Pcompleted and add to Pactive
  for (let x = 0; x < Pcompleted.length; x++) {
    if (Pcompleted[x].id == store_element.id) {
      //edit css properties of line
      element.parentNode.nextSibling.style.color = "rgb(47, 79, 79)";
      element.parentNode.nextSibling.style.textDecoration = "none";

      //add to Pcompleted and remove from Pactive
      Pactive.push(element.parentNode.parentNode);
      Pcompleted.splice(x, 1);

      //lastly change it to tick
      element.parentElement.innerHTML =
        '<i class="fa-regular fa-circle" onclick="checktask(this)" name="uncheckedtick"></i>';
    }
  }

  console.log(Pactive.length);
  numberShown.innerText = Pactive.length + " items left";
}

function clearCompleted() {
  //remove taskdiv then add only active and delete Pcompleted

  activeButton.click();

  tasksdiv.innerHTML = "";
  Pactive.forEach((element) => {
    tasksdiv.appendChild(element);
  });

  Pcompleted.length = 0;
}

function filter_out(button) {
  tasksdiv.innerHTML = "";

  //change color of button using if
  const buttonColor = getComputedStyle(button).color;

  if (buttonColor == "rgb(0, 0, 255)") {
    button.style.color = "rgb(169, 169, 169)";
  } else if (buttonColor == "rgb(169, 169, 169)") {
    button.style.color = "rgb(0, 0, 255)";
  }

  const activeButtonColor = getComputedStyle(activeButton).color;
  const completedButtonColor =
    getComputedStyle(completedButton).color;

  if (
    activeButtonColor == "rgb(0, 0, 255)" &&
    completedButtonColor == "rgb(0, 0, 255)"
  ) {
    Pactive.forEach((element) => {
      tasksdiv.appendChild(element);
    });
    Pcompleted.forEach((element) => {
      tasksdiv.appendChild(element);
    });
  } else if (
    activeButtonColor == "rgb(0, 0, 255)" &&
    completedButtonColor == "rgb(169, 169, 169)"
  ) {
    Pactive.forEach((element) => {
      tasksdiv.appendChild(element);
    });
  } else if (
    activeButtonColor == "rgb(169, 169, 169)" &&
    completedButtonColor == "rgb(0, 0, 255)"
  ) {
    Pcompleted.forEach((element) => {
      tasksdiv.appendChild(element);
    });
  } else if (
    activeButtonColor == "rgb(169, 169, 169)" &&
    completedButtonColor == "rgb(169, 169, 169)"
  ) {
    console.log("both filtered out.");
  }
}
