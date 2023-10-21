function Add() {
    var taskInput = document.getElementById("task-input");
    var prioritySelect = document.getElementById("priority");
    var categorySelect = document.getElementById("category-select");
    var deadlineInput = document.getElementById("deadline");
    var taskText = taskInput.value;
    var priority = prioritySelect.value;
    var deadline = deadlineInput.value;

    if (taskText === "") {
        alert("Please Enter Task");
        return;
    }

    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} (Priority: ${priority}, Deadline: ${deadline})</span>
        <input type="checkbox" onchange="toggleTaskCompletion(this)">
        <button onclick="Delete(this)"><i class="fas fa-trash-alt"></i></button>
    
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    prioritySelect.value = "High";
    categorySelect.value = "personal";
    deadlineInput.value = "";
}

function toggleTaskCompletion(checkbox) {
    var taskDescription = checkbox.previousElementSibling;
    if (checkbox.checked) {
        taskDescription.classList.add("completed-task");
    } else {
        taskDescription.classList.remove("completed-task");
    }
}

function Delete(button) {
    var li = button.parentElement;
    li.remove();
}
function filterTasks() {
    var searchInput = document.getElementById("search-input").value.toLowerCase();
    var tasks = document.querySelectorAll("#task-list li");

    tasks.forEach(function(task) {
        var taskText = task.textContent.toLowerCase();
        if (taskText.includes(searchInput)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}
