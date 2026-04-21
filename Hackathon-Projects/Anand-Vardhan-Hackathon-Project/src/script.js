document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("filterSelect").addEventListener("change", filterTasks);

let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const categorySelect = document.getElementById("categorySelect");
    const dateInput = document.getElementById("dateInput");

    if (!taskInput.value || !dateInput.value) return;

    const newTask = {
        id: Date.now(),
        title: taskInput.value,
        category: categorySelect.value,
        deadline: dateInput.value
    };

    tasks.push(newTask);
    taskInput.value = "";
    dateInput.value = "";
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    const filterValue = document.getElementById("filterSelect").value;

    taskList.innerHTML = ""; // Clear the list before rendering

    const filteredTasks = tasks.filter(task => {
        return filterValue === "All" || task.category === filterValue;
    });

    filteredTasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <div>
                <strong>${task.title}</strong> (${task.category}) - Due: ${task.deadline}
            </div>
            <div>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newTitle = prompt("Edit Task Title:", task.title);
        const newCategory = prompt("Edit Task Category:", task.category);
        const newDeadline = prompt("Edit Task Deadline:", task.deadline);
        
        if (newTitle) task.title = newTitle;
        if (newCategory) task.category = newCategory;
        if (newDeadline) task.deadline = newDeadline;

        renderTasks();
    }
}

function filterTasks() {
    renderTasks();
}
function updateTimestamp() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false // Change to true for 12-hour format
    };
    document.getElementById('timestamp').textContent = now.toLocaleString(undefined, options);
}

updateTimestamp(); // Call the function to set the initial timestamp
setInterval(updateTimestamp, 1000); // Update every second

