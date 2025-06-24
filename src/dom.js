import {todos} from "./todo.js";

const newTodoBtn = document.querySelector("#new-button");
const formContainer = document.querySelector("#todo-form-container");
const todoName = document.querySelector("#todo-name")
const todoDesc = document.querySelector("#todo-description")
const form = document.querySelector("#todo-form")
const addBtn = document.querySelector("#add-button")
const todoList = document.querySelector("#todo-list")

function RenderTodos() {
  todos.forEach(todo => {
    const li = document.createElement("li");
    const descP = document.createElement("p");
    const todoContainer = document.createElement("div");

    li.textContent = todo.name;
    descP.textContent = todo.description;
    todoContainer.appendChild(li);
    todoContainer.appendChild(descP);
    todoList.appendChild(todoContainer);
  });
}

export {RenderTodos};