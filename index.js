console.log("Todo App");

function addTodo(title) {
  return {
    title,
    completed: false
  };
}

console.log(addTodo("Learn Git PR"));
