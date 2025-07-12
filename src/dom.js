import {todos, projects} from "./todo.js";

const todoList = document.querySelector("#todo-list");
const projectsWrapper = document.querySelector(".projects-wrapper");

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
  projects.forEach(project => {
    const projectLabel = document.createElement("div");
    projectLabel.classList.add("sidebar-label");

    const projectIcon = document.createElement("img");
    projectIcon.src = "icons/hashtag-svgrepo-com.svg";
    projectIcon.alt = "#";
    projectIcon.classList.add("icon");

    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectName.classList.add("label-text");

    projectLabel.appendChild(projectIcon);
    projectLabel.appendChild(projectName);
    projectsWrapper.appendChild(projectLabel);
  });
}

export {RenderTodos, RenderProjects};