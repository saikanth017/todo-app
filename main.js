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
        let alltasks = document.querySelectorAll('.delete-button')
        taskList.addEventListener("click", function (event) {
            if (event.target.classList.contains("delete-button")) {
                event.target.parentNode.remove();
            }
        });
    }
}





// let todoele = document.getElementById("taskinfo")
// let tasklist = document.getElementById("tasklist")

// document.getElementById("add").onclick =function(){
//     if(todoele.value.length==0){
//         alert("Enter a task details")
//     }
//     else{
//         tasklist.innerHTML = tasklist.innerHTML+`    
//         <div class="task"> 
//             <span contenteditable="true" id="work">${todoele.value}</span>
//             <button class="del"><i class="fa fa-trash"></i></button>
//         </div>`

//         let alltasks = document.querySelectorAll('.del')
//         for(i=0;i<alltasks.length;i++){
//                 alltasks[i].onclick = function(){
//                 this.parentNode.remove()
//             }
//         }
//         todoele.value=""
//     }
// }
