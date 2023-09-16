const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.onclick = () => {
    if (taskInput.value == ''){
        document.getElementById('alert-message').innerText = "Please enter a task.."
    }
    else{
        document.getElementById('alert-message').innerText = ""
        let text = taskInput.value
        taskInput.value = ''
        taskList.innerHTML = `
        <div class="sub-container">
            <p contenteditable="true" class="text-data">${text}</p>
            <button class="delete-button">DELETE</button>
        </div>
        ` +taskList.innerHTML
        saveData();
        let alltasks = document.querySelectorAll('.delete-button')
    }
}

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentNode.remove();
        saveData();
    }
});


const saveData = () => {
    localStorage.setItem("data", taskList.innerHTML)
}

const getData = () => {
    taskList.innerHTML = localStorage.getItem("data")
}

getData();