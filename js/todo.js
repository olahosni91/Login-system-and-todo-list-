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

let addBtn = document.getElementById('taskBtn');
let taskList = document.getElementById('list');
let completeList = document.getElementById('completeList');

let container = []; //initialization
let complete = [];

let newTask = () => {
    let taskName = document.getElementById('taskName').value;
    let task = new Tasks(taskName);
    container.push(task);
    displayTask();
}
let displayTask = () => {
    let result = '';

    if(container.length >= 1){
    for(let i = 0 ;i < container.length; i++)
            result += `<tr>
                        <td class="col-9 fs-4">${container[i].taskName}</td>
                        <td>
                        <i role="button" onclick="completeThis(${i})" class="text-success fs-4 mx-3 fas fa-check-square"></i>
                        <i role="button" onclick="deleteThis(${i})" class=" text-danger fs-5 fas fa-trash"></i>
                        </td>
                        </tr>`;
    }
    taskList.innerHTML = result;
}

let displayComp = () =>{
    let Res = '';
    if(complete.length >= 1){
        Res= '<p class="text-center fs-3 text-success">Completed Tasks <p>';
        for(let i = 0; i < complete.length; i++)
        Res += `<tr> <td class="col-9 fs-4 text-secondary text-decoration-line-through">${complete[i].taskName}</td> </tr>`;
    }
    completeList.innerHTML = Res;
}

let completeThis = (id) => {
    let completedTask = new Completed(container[id].taskName);
    complete.push(completedTask);
    container.splice(id, 1);
    displayTask();
    displayComp();
}

let deleteThis = (id) => {
    container.splice(id, 1);
    displayTask();
}

addBtn.addEventListener('click', newTask);
