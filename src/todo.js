const newBtn = document.querySelector("#new-button");
todos = []

function createTodo(name, description = "", dueDate = null, priority = 4) {
  return {
    name,
    description,
    dueDate,
    priority,
  };
}

function addTodo(name, desc, dueDate, priority){
  todo = createTodo(name, desc, dueDate, priority)
  todos.append(todo)
}