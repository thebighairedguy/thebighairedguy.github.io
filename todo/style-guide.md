# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700

moon: <i class="fa-solid fa-moon"></i>
sun: <i class="fa-solid fa-sun"></i>

tick: <i class="fa-solid fa-circle-check"></i>
no-tick: <i class="fa-regular fa-circle"></i>

cross: <i class="fa-solid fa-xmark"></i>

const checked = Array.from(
document.getElementsByName("checkedtick")
);

checked.forEach((checkedTask) => {
checkedTask.parentNode.parentNode.remove();
});

numberShown.innerText = active.length + " items left";

---

console.log(1);

const form = document.forms["task-form"];
const input = form["task-input"];
const tasksdiv = document.getElementById("tasks-div");
const numberOfTasks = document.getElementById("tasks-div");
const numberShown = document.getElementById("total-tasks");

//let x = 0;

var completed = [];
var active = [];
var Pcompleted = [];
var Pactive = [];

form.addEventListener("submit", (e) => {
e.preventDefault();
tasksdiv.innerHTML +=
'<div class="task-line"><div class="checkmark-i"><i class="fa-regular fa-circle" onclick="checktask(this)" name="uncheckedtick"></i></div><p name="task-text-name">' +
input.value +
'</p><i class="fa-solid fa-xmark" onclick="removetask(this)"></i></div>';

Pcompleted.length = 0;
Pactive.length = 0;

completed = Array.from(document.getElementsByName("checkedtick"));
completed.forEach((element) => {
Pcompleted.push(element.parentNode.parentNode);
});

active = Array.from(document.getElementsByName("uncheckedtick"));
active.forEach((element) => {
Pactive.push(element.parentNode.parentNode);
});

numberShown.innerText = active.length + " items left";
});

function removetask(element) {
element.parentElement.remove();

//also need to count elements from Pactive or active for # of items left

//show all Parrays

//remove line through array and then remove Parray

Pcompleted.length = 0;
Pactive.length = 0;

completed = Array.from(document.getElementsByName("checkedtick"));
completed.forEach((element) => {
Pcompleted.push(element.parentNode.parentNode);
});

active = Array.from(document.getElementsByName("uncheckedtick"));
active.forEach((element) => {
Pactive.push(element.parentNode.parentNode);
});
}

function checktask(element2) {
element2.parentNode.nextElementSibling.style.color = "darkgray";
element2.parentNode.nextElementSibling.style.textDecoration =
"line-through";

element2.parentElement.innerHTML =
'<i class="fa-solid fa-circle-check" onclick="unchecktask(this)" name="checkedtick"></i>';

Pcompleted.length = 0;
Pactive.length = 0;

completed = Array.from(document.getElementsByName("checkedtick"));
completed.forEach((element) => {
Pcompleted.push(element.parentNode.parentNode);
});

active = Array.from(document.getElementsByName("uncheckedtick"));
active.forEach((element) => {
Pactive.push(element.parentNode.parentNode);
});
}

function unchecktask(element3) {
element3.parentNode.nextElementSibling.style.color =
"darkslategray";
element3.parentNode.nextElementSibling.style.textDecoration =
"none";

element3.parentElement.innerHTML =
'<i class="fa-regular fa-circle" onclick="checktask(this) name="uncheckedtick""></i>';

Pcompleted.length = 0;
Pactive.length = 0;

completed = Array.from(document.getElementsByName("checkedtick"));
completed.forEach((element) => {
Pcompleted.push(element.parentNode.parentNode);
});

active = Array.from(document.getElementsByName("uncheckedtick"));
active.forEach((element) => {
Pactive.push(element.parentNode.parentNode);
});
}

function clearCompleted() {
completed.forEach((element) => {
element.parentNode.parentNode.remove();
});

x = 0;

Pcompleted.length = 0;
// Pactive.length = 0;

completed = Array.from(document.getElementsByName("checkedtick"));
completed.forEach((element) => {
Pcompleted.push(element.parentNode.parentNode);
});

// active = Array.from(document.getElementsByName("uncheckedtick"));
// active.forEach((element) => {
// Pactive.push(element.parentNode.parentNode);
// });
}

function all(button) {}

function funcActive(button) {
const buttonColor = getComputedStyle(button).color;

if (buttonColor == "rgb(169, 169, 169)") {
button.style.color = "rgb(0, 0, 255)";

    completed.forEach((element) => {
      element.parentNode.parentNode.remove();
    });

} else if (buttonColor == "rgb(0, 0, 255)") {
button.style.color = "rgb(169, 169, 169)";

    Pcompleted.forEach((element) => {
      tasksdiv.appendChild(element);
    });
    // Pcompleted.length = 0;

}
}

function funcCompleted(button) {
const buttonColor = getComputedStyle(button).color;

if (buttonColor == "rgb(169, 169, 169)") {
button.style.color = "rgb(0, 0, 255)";

    active.forEach((element) => {
      element.parentNode.parentNode.remove();
    });

} else if (buttonColor == "rgb(0, 0, 255)") {
button.style.color = "rgb(169, 169, 169)";

    Pactive.forEach((element) => {
      tasksdiv.appendChild(element);
    });
    // Pactive.length = 0;

}
}
