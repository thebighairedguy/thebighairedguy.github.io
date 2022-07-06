console.log("todo.js loaded.");
//variable declarations

const form = document.forms["task-form"];
const tasksdiv = document.getElementById("tasks-div");
const numberShown = document.getElementById("total-tasks");
const activeButton = document.getElementById("active");
const completedButton = document.getElementById("completed");
const clearButton = document.getElementById("clearButton");
const activeButtonColor = getComputedStyle(activeButton).color;
const completedButtonColor = getComputedStyle(completedButton).color;
const todo_bodytag = document.getElementById("todo-bodytag");
const todo_input = document.getElementById("todo-input");
const task_input = document.getElementById("task-input");
const todo_card = document.getElementById("todo-card");

var Pcompleted = [];
var Pactive = [];

//tg_num will give id to each task line

let tg_num = 0;

//img responsiveness
const screen_width = window.matchMedia("(max-width: 480px)");
function img_responsiveness(screen_width) {
  if (todo_bodytag.style.backgroundColor == "rgb(24, 24, 36)") {
    if (screen_width.matches) {
      img_holder.src = "bg-mobile-dark.jpg";
    } else {
      img_holder.src = "bg-desktop-dark.jpg";
    }
  } else {
    if (screen_width.matches) {
      img_holder.src = "bg-mobile-light.jpg";
    } else {
      img_holder.src = "bg-desktop-light.jpg";
    }
  }
}

screen_width.addListener(img_responsiveness);

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

  tg_num++;

  tasksdiv.innerHTML += `<div id="task_num_${tg_num}" class="task-line" onmouseenter="hoverOn(this)" onmouseleave="hoverOff(this)" ><div class="checkmark-i"><i class="fa-regular fa-circle" onclick="checktask(this)" name="uncheckedtick"></i></div><p class="task-text-name">${input.value}</p><i class="fa-solid fa-xmark" name="cross" onclick="removetask(this)"></i></div>`;

  //store in Pactive
  Pactive.push(tasksdiv.lastChild);

  //not Pcompleted because we arent changing that here, we are only adding to Pactive here

  console.log(Pactive.length);
  numberShown.innerText = Pactive.length + " items left";

  activeButton.click();
  activeButton.click();
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

  activeButton.click();
  activeButton.click();
}

function unchecktask(element) {
  //store element in const for if reference
  const store_element = element.parentNode.parentNode;

  //delete from Pcompleted and add to Pactive
  for (let x = 0; x < Pcompleted.length; x++) {
    if (Pcompleted[x].id == store_element.id) {
      //edit css properties of line

      if (z % 2 == !0) {
        //night mode
        element.parentNode.nextSibling.style.color = "";
      } else if (z % 2 == 0) {
        element.parentNode.nextSibling.style.color = "";
      }

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

  activeButton.click();
  activeButton.click();
}

function clearCompleted() {
  //remove taskdiv then append only active and delete Pcompleted

  const activeButtonColor = getComputedStyle(activeButton).color;
  const completedButtonColor =
    getComputedStyle(completedButton).color;

  if (activeButtonColor == "rgb(169, 169, 169)") {
    activeButton.click();
  }

  if (completedButtonColor == "rgb(169, 169, 169)") {
    completedButton.click();
  }

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

  if (buttonColor == "rgb(58, 123, 253)") {
    button.style.color = "rgb(169, 169, 169)";
  } else if (buttonColor == "rgb(169, 169, 169)") {
    button.style.color = "rgb(58, 123, 253)";
  }

  const activeButtonColor = getComputedStyle(activeButton).color;
  const completedButtonColor =
    getComputedStyle(completedButton).color;

  if (
    activeButtonColor == "rgb(58, 123, 253)" &&
    completedButtonColor == "rgb(58, 123, 253)"
  ) {
    Pactive.forEach((element) => {
      tasksdiv.appendChild(element);
    });
    Pcompleted.forEach((element) => {
      tasksdiv.appendChild(element);
    });
  } else if (
    activeButtonColor == "rgb(58, 123, 253)" &&
    completedButtonColor == "rgb(169, 169, 169)"
  ) {
    Pactive.forEach((element) => {
      tasksdiv.appendChild(element);
    });
  } else if (
    activeButtonColor == "rgb(169, 169, 169)" &&
    completedButtonColor == "rgb(58, 123, 253)"
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

//Night-Day Mode

let z = 0;
const img_holder = document.getElementById("todo-bg-img");

function changeMode(button) {
  z++;

  if (z % 2 == !0) {
    //night mode
    button.parentElement.innerHTML =
      '<i class="fa-solid fa-sun" id="sun" onclick="changeMode(this)"></i>';

    todo_bodytag.style.backgroundColor = "rgb(24, 24, 36)";

    todo_input.style.backgroundColor = "rgb(37, 39, 60)";
    task_input.style.backgroundColor = "rgb(37, 39, 60)";
    todo_card.style.backgroundColor = "rgb(37, 39, 60)";
    activeButton.style.backgroundColor = "rgb(37, 39, 60)";
    completedButton.style.backgroundColor = "rgb(37, 39, 60)";
    clearButton.style.backgroundColor = "rgb(37, 39, 60)";

    todo_input.style.color = "rgb(250, 250, 250)";
    task_input.style.color = "rgb(250, 250, 250)";
    todo_card.style.color = "rgb(250, 250, 250)";

    if (todo_bodytag.style.backgroundColor == "rgb(24, 24, 36)") {
      if (screen_width.matches) {
        img_holder.src = "bg-mobile-dark.jpg";
      } else {
        img_holder.src = "bg-desktop-dark.jpg";
      }
    } else {
      if (screen_width.matches) {
        img_holder.src = "bg-mobile-light.jpg";
      } else {
        img_holder.src = "bg-desktop-light.jpg";
      }
    }
  } else if (z % 2 == 0) {
    //day mode
    button.parentElement.innerHTML =
      '<i class="fa-solid fa-moon" id="moon" onclick="changeMode(this)"></i>';

    todo_bodytag.style.backgroundColor = "rgb(250, 250, 250)";

    todo_input.style.backgroundColor = "rgb(250, 250, 250)";
    task_input.style.backgroundColor = "rgb(250, 250, 250)";
    todo_card.style.backgroundColor = "rgb(250, 250, 250)";
    activeButton.style.backgroundColor = "rgb(250, 250, 250)";
    completedButton.style.backgroundColor = "rgb(250, 250, 250)";
    clearButton.style.backgroundColor = "rgb(250, 250, 250)";

    todo_input.style.color = "rgb(47, 79, 79)";
    task_input.style.color = "rgb(47, 79, 79)";
    todo_card.style.color = "rgb(47, 79, 79)";

    if (todo_bodytag.style.backgroundColor == "rgb(24, 24, 36)") {
      if (screen_width.matches) {
        img_holder.src = "bg-mobile-dark.jpg";
      } else {
        img_holder.src = "bg-desktop-dark.jpg";
      }
    } else {
      if (screen_width.matches) {
        img_holder.src = "bg-mobile-light.jpg";
      } else {
        img_holder.src = "bg-desktop-light.jpg";
      }
    }
  }
}

//To fix the image that's loaded first

const moon_button = document.getElementById("moon");
moon_button.click();
const sun = document.getElementById("sun");
sun.click();

//bottom border
