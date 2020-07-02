// Selectors
const todoInput2 = document.getElementsByClassName('todo-input')[0]; // array-like data structure
console.log(todoInput2);
const todoInput = document.querySelector('.todo-input'); // selects actual element
console.log(todoInput); // logs element itself
console.dir(todoInput); // logs object properties
const todoList = document.querySelector('.todo-list');
console.log(todoList);
console.dir(todoList);
const submitBtn = document.querySelector('.todo-button');
console.log(submitBtn); 

// Event Listeners
submitBtn.addEventListener('click', addTodo);
/* Can't select the actual todoDiv here because it is not present in the begining, is created dynamically.
   So selecting the whole ul instead. */
todoList.addEventListener('click', deleteOrCheck);

// Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create list li
    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value;
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem);
    // Create check button to denote completed todo
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);
    // Create trash button to delete completed todo
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    // Append todo div to todoList
    todoList.appendChild(todoDiv);
    // Clear input text value 
    todoInput.value = "";
}

function deleteOrCheck(e) {
    console.dir(e.target);
    const item = e.target;

    // Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Add fall animation using css class
        todo.classList.add('fall');
        // Remove todo div after transition ends
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    // Check todo as completed
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
