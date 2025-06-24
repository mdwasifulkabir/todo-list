import { todos, addTodo } from "./todo";
import "./styles.css";

const newTodoBtn = document.querySelector("#new-button");
const formContainer = document.querySelector("#todo-form-container");
const todoName = document.querySelector("#todo-name")
const todoDesc = document.querySelector("#todo-description")
const form = document.querySelector("#todo-form")
const addBtn = document.querySelector("#add-button")
const todoList = document.querySelector("#todo-list")

newTodoBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  todoName.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = todoName.value.trim();
  if (!name) return;
  const desc = todoDesc.value.trim();
  addTodo(name, desc);

  form.reset();
  formContainer.style.display = "none";

  todoList.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = name;
    todoList.appendChild(li);
  });
});