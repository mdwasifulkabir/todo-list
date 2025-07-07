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

function AddTodo(name, desc, dueDate, priority){
  const todo = createTodo(name, desc, dueDate, priority)
  todos.push(todo)
}

export {todos, AddTodo};