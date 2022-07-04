console.log(1);

const form = document.forms["task-form"];
const input = form["task-input"];
const tasksdiv = document.getElementById("tasks-div");
const numberOfTasks = document.getElementById("tasks-div");
const numberShown = document.getElementById("total-tasks");

let x = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  tasksdiv.innerHTML +=
    '<div class="task-line"><div class="checkmark-i"><i class="fa-regular fa-circle" onclick="checktask(this)" name="uncheckedtick"></i></div><p name="task-text-name">' +
    input.value +
    '</p><i class="fa-solid fa-xmark" onclick="removetask(this)"></i></div>';

  numberShown.innerText =
    numberOfTasks.childElementCount + " items left";
});

function removetask(element) {
  element.parentElement.remove();

  numberShown.innerText =
    numberOfTasks.childElementCount + " items left";
}

function checktask(element2) {
  element2.parentNode.nextElementSibling.style.color = "darkgray";
  element2.parentNode.nextElementSibling.style.textDecoration =
    "line-through";

  element2.parentElement.innerHTML =
    '<i class="fa-solid fa-circle-check" onclick="unchecktask(this)" name="checkedtick"></i>';

  x -= 1;
  numberShown.innerText =
    numberOfTasks.childElementCount + x + " items left";
}

function unchecktask(element3) {
  element3.parentNode.nextElementSibling.style.color =
    "darkslategray";
  element3.parentNode.nextElementSibling.style.textDecoration =
    "none";

  element3.parentElement.innerHTML =
    '<i class="fa-regular fa-circle" onclick="checktask(this) name="uncheckedtick""></i>';

  x += 1;
  numberShown.innerText =
    numberOfTasks.childElementCount + x + " items left";
}

function clearCompleted() {
  const checked = Array.from(
    document.getElementsByName("checkedtick")
  );

  checked.forEach((checkedTask) => {
    checkedTask.parentNode.parentNode.remove();
  });
}

function active() {
  //  const completed = Array.from(
  //    document.getElementsByName("checkedtick")
  // );
  //  const Pcompleted = [];
  //  completed.forEach((element) => {
  //    Pcompleted.push(element.parentNode.parentNode);
  //  });
  //  completed.forEach((element) => {
  //    element.parentNode.parentNode.remove();
  //  });
}
