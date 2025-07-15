const newBtn = document.querySelector("#new-button");
const newProjectBtn = document.querySelector("#add-project-button");
let projects = [];

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

function AddTodo(project, name, desc, dueDate, priority){
  const todo = createTodo(name, desc, dueDate, priority)
  project.todos.push(todo)
}

function AddProject(name) {
  const project = createProject(name); 
  projects.push(project);
}

//default project
AddProject("Tasks");
export {AddTodo, projects, AddProject};