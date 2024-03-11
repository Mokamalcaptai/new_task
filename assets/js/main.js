let inp = document.querySelector("[type='text']");
let add = document.querySelector(".add-task");
let div = document.querySelector(".tasks");


window.onload = _ => inp.focus() ;
if (localStorage.task != null) {
  dataTasks = JSON.parse(localStorage.task)
} else {
  dataTasks = [];
}

add.onclick = function () {
  let newTask = {
    task:inp.value
  }
  if (inp.value != "") {
    dataTasks.unshift(newTask);
  }
  localStorage.setItem("task", JSON.stringify(dataTasks));
  showTasks();
}


//show data 
function showTasks() {
  let table = "";
  for (let i = 0; i < dataTasks.length; i++){
    table += `
    <div class="task">
    <p>${dataTasks[i].task}</p>
    <button onclick="deleteTask(${i})">Done</button>
    </div>`
    document.querySelector(".taskBox").innerHTML = table;
  }
  title();
}
showTasks();

function deleteTask(i) {
  dataTasks.splice(i, 1);
  localStorage.task = JSON.stringify(dataTasks);
  showTasks();
  if (dataTasks.length == 0) {
  document.querySelector(".taskBox").style.opacity = "0";
  } else {
    document.querySelector(".taskBox").style.opacity = "1";
}
}
if (dataTasks.length == 0) {
  document.querySelector(".taskBox").style.opacity = "0";
}

function title() {
  if (dataTasks.length > 0) {
  document.querySelector("h1").style.display = "block";
} else {
  document.querySelector("h1").style.display = "none";
};
}
title();

