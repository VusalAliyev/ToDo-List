const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector(".myUl");

let todos = [];

form.addEventListener("submit", addTodo);

function addTodo(e) {
  const newToDo = input.value.trim();
  addTodoToUI(newToDo);

  e.preventDefault();
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

  input.value = "";
}
