const newBtn = document.querySelector("#new-button");
const newProjectBtn = document.querySelector("#add-project-button");
let projects;

function initializeProjects() {
  const storedProjects = localStorage.getItem('projects');
  projects = storedProjects ? JSON.parse(storedProjects) : [];
  
  if (projects.length === 0) {
    AddProject("Tasks");
  }
}

initializeProjects();

function SaveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
} 

function CreateTodo(name, description = "", dueDate = null, priority = 4) {
  return {
    name,
    description,
    dueDate,
    priority,
  };
}

function CreateProject(name) {
  return {
    name,
    todos : [],
  };
}

function AddTodo(project, name, desc, dueDate, priority){
  const todo = CreateTodo(name, desc, dueDate, priority);
  project.todos.push(todo);
  SaveProjects();
}

function AddProject(name) {
  const project = CreateProject(name); 
  projects.push(project);
  SaveProjects();
}

//default project
if(projects.length ===  0){
  AddProject("Tasks");
}

export {AddTodo, projects, AddProject, SaveProjects};