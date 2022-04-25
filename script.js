//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//EVENT LISTENERS
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);




//FUNCTIONS
function addTodo(event){
    event.preventDefault(); // previene l'impostazione predefinita del browser che si aggiorna
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);    
    //Check mark
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class= "fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //Delete Mark
     const deletedButton = document.createElement('button');
     deletedButton.innerHTML= '<i class= "fas fa-trash"></i>';
     deletedButton.classList.add('trash-btn');
     todoDiv.appendChild(deletedButton);
    //Append to List
     todoList.appendChild(todoDiv);
    //Clear todo input.value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target; //elemento su cui sto cliccando 
    //delete todo
    if(item.classList[0] === "trash-btn"){ //classlist[0] è la prima classe dell'elemento
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}