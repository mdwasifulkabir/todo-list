import { todos, AddTodo, projects, AddProject } from "./todo";
import { RenderProjects, RenderTodos } from "./dom.js";
import "./styles.css";
import { getCurrentProject } from "./state.js";

const newTodoBtn = document.querySelector("#new-button");
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

newTodoBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  todoName.focus();
});

cancelBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
})

newProjectBtn.addEventListener("click", () => {
  projectDialog.showModal();
});

projectInputCancelBtn.addEventListener("click", () => {
  projectDialog.close();
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
  formContainer.style.display = "none";

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