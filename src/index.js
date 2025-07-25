import { AddTodo, projects, AddProject } from "./todo";
import { RenderAllTodos, RenderProjects, RenderTodos, RenderTodayTodos } from "./dom.js";
import "./styles.css";
import { getCurrentProject } from "./state.js";

const newTodoBtn = document.querySelector("#new-button");
const todoDialog = document.querySelector(".todo-dialog")
const formContainer = document.querySelector("#todo-form-container");
const todoName = document.querySelector("#todo-name");
const todoDesc = document.querySelector("#todo-description");
const todoDueDate = document.querySelector("#todo-date");
const form = document.querySelector("#todo-form");
const cancelBtn = document.querySelector("#cancel-button");
const newProjectBtn = document.querySelector("#add-project-button");
const projectInputCancelBtn = document.querySelector("#project-input-cancel-button");
const projectName = document.querySelector(".project-name-input");
const projectDialog = document.querySelector(".project-dialog");
const projectForm = document.querySelector(".project-form");
const allTasksLabel = document.querySelector("#all-tasks-label")
const todayLabel = document.querySelector("#today-label");

newTodoBtn.addEventListener("click", () => {
  todoDialog.showModal();
  todoName.focus();
});

cancelBtn.addEventListener("click", () => {
  todoDialog.close();
})

newProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

projectInputCancelBtn.addEventListener("click", () => {
  projectDialog.close();
});

allTasksLabel.addEventListener("click", () => {
  RenderAllTodos();
});

todayLabel.addEventListener("click", () => {
  RenderTodayTodos();  
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = todoName.value.trim();
  if (!name) return;
  const desc = todoDesc.value.trim();
  const dueDate = todoDueDate.value ? todoDueDate.value : null;
  const project = getCurrentProject();

  AddTodo(project, name, desc, dueDate);

  form.reset();
  todoDialog.close();

  RenderTodos(project);
});

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = projectName.value.trim();
  if (!name) return;
  AddProject(name);

  projectForm.reset();
  projectDialog.close();

  RenderProjects();
});