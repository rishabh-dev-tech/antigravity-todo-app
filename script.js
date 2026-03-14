let input = document.getElementById("taskInput");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {

    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
<div class="task-left">
<input type="checkbox" onchange="toggleTask(this)">
<span>${task}</span>
</div>
<button class="delete-btn" onclick="deleteTask(this)">Delete</button>
`;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTask(checkbox) {
    let text = checkbox.nextElementSibling;
    text.classList.toggle("completed");
}