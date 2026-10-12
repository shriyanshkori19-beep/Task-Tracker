let taskInput= document.getElementById('taskInput');
let addTaskBtn= document.getElementById('addTaskBtn');
let taskList= document.getElementById('taskList');

addTaskBtn.addEventListener('click', function(){
    let taskText= taskInput.value.trim();
    if(taskText===""){
        alert("PLease enter a task!");
        return;
    }

    let li= document.createElement('li');

    li.textContent= taskText;

    let deleteBtn= document.createElement('button');
    deleteBtn.textContent= "Delete";
    deleteBtn.className= "delete-btn";

    deleteBtn.addEventListener('click', function(){
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value= "";
});