import {todos, projects} from "./todo.js";

const todoList = document.querySelector("#todo-list")

function RenderTodos() {
  todoList.innerHTML = ""; 
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    checkbox.addEventListener("change", () => {
      todos.splice(index, 1);
      RenderTodos();
    });

    li.textContent = todo.name;

    if (todo.description){
      const descP = document.createElement("p");
      descP.textContent = todo.description;
      li.append(descP)
    }

    if (todo.dueDate) {
      const dueDateP = document.createElement("p");
      dueDateP.textContent = `Due: ${todo.dueDate}`;
      li.append(dueDateP);
    }
    todoContainer.appendChild(checkbox);
    todoContainer.appendChild(li);
    todoList.appendChild(todoContainer);
  });
}

function RenderProjects() {
  projects.forEach()
}

export {RenderTodos};