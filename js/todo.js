var container;
var complete;
var addBtn = document.getElementById('taskBtn');
let taskList = document.getElementById('list');
let completeList = document.getElementById('completeList');
let taskName = document.getElementById('taskName');

let newTask = () => {
    let task = new Tasks(taskName.value);
    container.push(task);
    localStorage.setItem ("Tasks" , JSON.stringify(container));
    displayTask();
    clear();
}

var displayTask = () =>{
    let result = ``;
    if(container.length >= 1){
        result= '<p class="text-center fs-3 text-light">Pending Tasks <p>';

    for(let i = 0 ;i < container.length; i++)
            result += `
                        <div class='row justify-content-between'>
                            <p class="col-7 fs-4">${container[i].taskName}</p>
                            <div class= 'col-3'>
                                <i role="button" onclick="completeThis(${i})" class="text-success fs-4 mx-3 fas fa-check-square"></i>
                                <i role="button" onclick="deleteThis(${i})" class=" text-danger fs-5 fas fa-trash"></i>
                            </div>
                            <hr>
                        </div>`;
    }
    taskList.innerHTML = result;
}

let clear= () => taskName.value = '';

let deleteThis = (id) => {
    container.splice(id, 1);
    localStorage.setItem('Tasks',JSON.stringify(container))
    displayTask();
}
var displayComp = () =>{
    let Res = ``;
    if(complete.length >= 1){
        Res= '<p class="text-center fs-3 text-light">Completed Tasks <p>';
        for(let i = 0; i < complete.length; i++)
        Res += ` <div class="bg-success row justify-content-between fs-4 text-light">
                    <p class='col-7 text-decoration-line-through'>${complete[i].taskName} </p>
                    <i role="button" onclick="deleteComp(${i})" class="col-2 my-auto text-danger fs-5 fas fa-trash"></i>
                </div> `;
    }
    completeList.innerHTML = Res;
}
var completeThis = (id) => {
    let completedTask = new Completed(container[id].taskName);
    complete.push(completedTask);
    localStorage.setItem('completed tasks', JSON.stringify(complete));
    container.splice(id, 1);
    localStorage.setItem('Tasks', JSON.stringify(container));
    displayTask();
    displayComp();
}

let deleteComp = (id) =>{
    complete.splice(id, 1);
    localStorage.setItem('completed tasks',JSON.stringify(complete))
    displayComp();
}

if(localStorage.getItem("Tasks") == null){
    container = [];
    // complete = []
}else{
container = JSON.parse(localStorage.getItem("Tasks"));
displayTask();
}

if (localStorage.getItem("completed tasks") == null){
    complete = [];
}else{
complete = JSON.parse(localStorage.getItem('completed tasks'));
displayComp();
}

addBtn.addEventListener('click', newTask);

class Tasks{
    constructor(taskName){
        this.taskName = taskName;
    }
}

class Completed extends Tasks{
    constructor(taskName){
        super(taskName);
    }
}



