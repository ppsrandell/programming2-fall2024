let tasks = ["fold clothes", "study for math"];

function showTasks() {
    let taskListUl = document.getElementById("task-list");
    taskListUl.innerHTML = ""; // deleting the current tasks in the html
    for (let i=0; i < tasks.length; i++){
        let li = document.createElement("li"); //create a new li using java
        li.innerText = tasks[i]; // turning the list into a li
        taskListUl.appendChild(li); // adding The list
    } 
}

function addTask(){
    let task = prompt("Enter your task: ");
    tasks.push(task);
    showTasks(); // re renders the tasks
}

function clearTask(){
    tasks = [];
    showTasks();
}

function removeTask(){
    let task = prompt("Remove a task: ");
    tasks.pop(task);
    showTasks();
}

function priority(){
    let task = prompt("Make this task a priotity");
    let taskListUl = document.getElementById("task-list");
    let listItems= taskListUl.getElementsByTagName("li");
    for (let i=0; i < tasks.length; i++){
        if(tasks[i]==task){
            listItems[i].style.color = "yellow";
        }
    }
}