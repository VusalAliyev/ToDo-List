const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector(".myUl");
const todos = JSON.parse(localStorage.getItem("todos")) || []; //array


form.addEventListener("submit", addTodo);
document.addEventListener("DOMContentLoaded",loadTodosToUI)

function loadTodosToUI(){
    todos.forEach(todo => {
      addTodoToUI(todo)
    });
}

function addTodo(e) {
  const newToDo = input.value.trim();
  if (newToDo ==="") {
    alert("Boş keçilə bilməz")
  }
  else{
    addTodoToUI(newToDo);
    addToDoToStorage();
  }

  e.preventDefault();
}

function addToDoToStorage(){
  localStorage.setItem("todos", JSON.stringify(todos)); 
}


function addTodoToUI(newToDo) {
  todos.push(newToDo);
  const listItem = document.createElement("li");
  for (let i = 0; i < todos.length; i++) {
    listItem.innerHTML = ` 
    <a href="#">
      ${todos[i]}
    </a>
    <i class="fas fa-trash"></i>`;
    ul.appendChild(listItem);
  }
  
  // const listItem = document.createElement("li");
  // const link=document.createElement("a");
  // link.innerHTM=`<i class="fas fa-trash"></i>`
  
  // listItem.appendChild(document.createTextNode(newToDo))
  // listItem.appendChild(link)

  // ul.appendChild(listItem)
  
  input.value = "";
}
