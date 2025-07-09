const newBtn = document.querySelector("#new-button");
const newProjectBtn = document.querySelector("#add-project-button")
let todos = []
let projects = []

function createTodo(name, description = "", dueDate = null, priority = 4) {
  return {
    name,
    description,
    dueDate,
    priority,
  };
}

function createProject(name) {
  return {
    name,
    todos : [],
  };
}

function AddTodo(name, desc, dueDate, priority){
  const todo = createTodo(name, desc, dueDate, priority)
  todos.push(todo)
}

function AddProject(name) {
  const project = createProject(name); 
  projects.push(project);
}

export {todos, AddTodo, projects, AddProject};