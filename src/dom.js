import { projects, SaveProjects } from "./todo.js";
import hashtag from "./icons/hashtag-svgrepo-com.svg";
import deleteSVG from "./icons/delete-svgrepo-com.svg";
import { getCurrentProject, setCurrentProject } from "./state.js";
import { isToday, parseISO } from "date-fns";

const todoList = document.querySelector("#todo-list");
const projectsWrapper = document.querySelector(".projects-wrapper");
const projectList = document.querySelector("#project-list");
const allTasksLabel = document.querySelector("#all-tasks-label")
const todayLabel = document.querySelector("#today-label");

//set default project
RenderProjects();
setCurrentProject(projects[0]);
RenderTodos(getCurrentProject());

function RenderTodos(project) {
  todoList.innerHTML = ""; 
  project.todos.forEach((todo, index) => {
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
      project.todos.splice(index, 1);
      RenderTodos(project);
      SaveProjects();
    });

    checkbox.addEventListener("change", () => {
      project.todos.splice(index, 1);
      RenderTodos(project);
      SaveProjects();
    });

    li.textContent = todo.name;

    if (todo.description){
      const descP = document.createElement("p");
      descP.textContent = todo.description;
      li.append(descP);
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

function RenderTodayTodos() {
  todoList.innerHTML = "";
  allTasksLabel.classList.remove("selected");
  todayLabel.classList.add("selected");
  RenderProjects();

  for (const project of projects) {
    project.todos.forEach((todo, index) => {
      let dueDate = todo.dueDate ? parseISO(todo.dueDate) : null;
      if (!isToday(dueDate) || !dueDate){
        return;
      }

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
        project.todos.splice(index, 1);
        RenderTodos(project);
        SaveProjects();
      });

      checkbox.addEventListener("change", () => {
        project.todos.splice(index, 1);
        RenderTodos(project);
        SaveProjects();
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
}

function RenderAllTodos() {
  todoList.innerHTML = "";
  todayLabel.classList.remove("selected");
  allTasksLabel.classList.add("selected");
  RenderProjects();

  for (const project of projects) {
    project.todos.forEach((todo, index) => {
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
        project.todos.splice(index, 1);
        RenderTodos(project);
        SaveProjects();
      });

      checkbox.addEventListener("change", () => {
        project.todos.splice(index, 1);
        RenderTodos(project);
        SaveProjects();
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
}

function RenderProjects() {
  projectList.innerHTML = "";
  projects.forEach((project, index) => {
    const projectLabel = document.createElement("div");
    projectLabel.classList.add("sidebar-label");
    const allTasksSelected = allTasksLabel.classList.contains("selected");
    const todaySelected = todayLabel.classList.contains("selected")
    if (project === getCurrentProject() && !allTasksSelected && !todaySelected) {
      projectLabel.classList.add("selected");
    }
    projectLabel.addEventListener("click", () => {
      allTasksLabel.classList.remove("selected");
      todayLabel.classList.remove("selected");
      setCurrentProject(project);
      RenderProjects();
      RenderTodos(project);
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
      SaveProjects();
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

export {RenderTodos, RenderProjects, RenderAllTodos, RenderTodayTodos};