import {todos, projects} from "./todo.js";
import hashtag from "./icons/hashtag-svgrepo-com.svg";
import deleteSVG from "./icons/delete-svgrepo-com.svg";


const todoList = document.querySelector("#todo-list");
const projectsWrapper = document.querySelector(".projects-wrapper");
const projectList = document.querySelector("#project-list");

function RenderTodos() {
  todoList.innerHTML = ""; 
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("deleteIcon")
    deleteIcon.src = deleteSVG;
    deleteIcon.alt = "Delete";
    deleteIcon.classList.add("icon");

    deleteIcon.addEventListener("click", () => {
      todos.splice(index, 1);
      RenderTodos();
    });

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
    todoContainer.appendChild(deleteIcon);
    todoList.appendChild(todoContainer);
  });
}

function RenderProjects() {
  projectList.innerHTML = "";
  projects.forEach((project, index) => {
    const projectLabel = document.createElement("div");
    projectLabel.classList.add("sidebar-label");
    projectLabel.addEventListener("click", () => {
      todoList.innerHTML = "";
    });

    const projectIcon = document.createElement("img");
    projectIcon.src = hashtag;
    projectIcon.alt = "#";
    projectIcon.classList.add("icon");

    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("deleteIcon")
    deleteIcon.src = deleteSVG;
    deleteIcon.alt = "Delete";
    deleteIcon.classList.add("icon");

    deleteIcon.addEventListener("click", () => {
      projects.splice(index, 1);
      RenderProjects();
    });

    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectName.classList.add("label-text");

    projectLabel.appendChild(projectIcon);
    projectLabel.appendChild(projectName);
    projectLabel.appendChild(deleteIcon);
    projectList.appendChild(projectLabel);
  });
}

export {RenderTodos, RenderProjects};