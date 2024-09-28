


function addTask(day) {
    const input = document.getElementById(`${day}-task-input`);
    const taskText = input.value.trim();

    if (taskText) {
        const taskList = document.getElementById(`${day}-tasks`);
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)"> ${taskText}
            <button onclick="deleteTask(this)">✖</button>
        `;
        taskList.appendChild(taskItem);
        input.value = ''; // Clear input after adding task
    } else {
        alert('Please enter a task.');
    }
}

function toggleTask(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed', checkbox.checked);
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
