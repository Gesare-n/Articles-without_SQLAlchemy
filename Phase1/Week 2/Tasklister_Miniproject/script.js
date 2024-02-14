document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    taskList.appendChild(newTask);
    taskInput.value = '';
});

document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
document.getElementById('show-incomplete').addEventListener('click', function() {
    let incompleteTodos = todos.filter(todo => !todo.complete);
    renderTodos(incompleteTodos);
});
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Add the task to the list
    // ...

    // Hide the cancel button
    document.getElementById('cancelTask').style.display = 'none';
});

document.getElementById('cancelTask').addEventListener('click', function() {
    // Remove the last added task from the list
    // ...

    // Hide the cancel button
    this.style.display = 'none';
});
document.getElementById('cancelTask').style.display = 'inline-block';