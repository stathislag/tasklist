const btn = document.querySelector(".btn");
const taskyBox = document.querySelector(".tasky-box");
let listContainer = document.querySelector(".list-container");
btn.addEventListener("click", actionBtn);

function actionBtn() {
  //   let listContainer = document.querySelector(".list-container");

  if (taskyBox.value === "") {
    alert("Please add a Task");
  } else {
    let li = document.createElement("li");
    li.textContent = taskyBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "X";
    li.appendChild(span);
  }
  taskyBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function recallData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

recallData();
// 1 theloyme na kanoume eisagogi sto kouti
// 2 na patame to koumpi
// 3 na ginete isagogi mesa sto li
