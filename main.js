
const btnAdd = document.querySelector("#btn-add");
const list = document.querySelector(".container_task");



function checkTask(){
    document.querySelector("#input-task").focus();
    let subTitulo = document.querySelector(".tittle-task");
    
    if(list.children.length === 0 ){
        subTitulo.textContent = "Nothing to Do ...";
    }else{
        subTitulo.textContent = "Task to Do";
    }
}

checkTask();


function newTask(task){
    let div = document.createElement("div");
    div.classList.add("new-task");

    let p = document.createElement("p");
    p.classList.add("task");
    p.textContent=task;

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = '<i class="btn_delete bi bi-x-square-fill"></i>';

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btn-edit");
    btnEdit.innerHTML = '<i class="btn_edit bi bi-pencil-fill"></i>';

    let btnDoit = document.createElement("button");
    btnDoit.classList.add("btn-doit");
    btnDoit.innerHTML = '<i class="btn_doit bi bi-check2-square"></i>';

    div.append(btnDoit,p,btnDelete,btnEdit)
    list.append(div);


    btnDelete.addEventListener("click",() => {
        div.remove();
        checkTask();
    });

    btnEdit.addEventListener("click", () => {
        const newTask = prompt("Editar tarea: ", p.textContent);
        p.textContent = newTask;
    });

    btnDoit.addEventListener("click", () => {
        if(p.classList.contains("doit")){
            p.classList.remove("doit")
        }else{
            p.classList.add("doit")
        }
    })

}



btnAdd.addEventListener("click", () => { 

    const task = document.querySelector("#input-task").value;

    if(task === ""){
        alert("You should type a task")
    }else{

        newTask(task);
        document.querySelector("#input-task").value = ""
    
        checkTask();
    
    }

    
});


