const newBtn = document.querySelector("#new-button");
let todos = []

function createTodo(name, description = "", dueDate = null, priority = 4) {
  return {
    name,
    description,
    dueDate,
    priority,
  };
}

function addTodo(name, desc, dueDate, priority){
  const todo = createTodo(name, desc, dueDate, priority)
  todos.push(todo)
}

function sortTodo() {
  todos.sort((a,b) => a.priority - b.priority);
}

function printTodos() {
  sortTodo();
  todos.forEach(todo => {
    console.log(todo);
  });
}

addTodo("sdsf");
addTodo("css");

export {todos, printTodos};