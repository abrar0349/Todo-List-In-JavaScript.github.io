let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

// console.log(inputBox,addBtn,todoList)

let editTodo = null;

// Update and add todo list data
function addTodo(){
    let inputText = inputBox.value.trim()
    if(inputText.length <= 0){
        alert("please Enter the value");
        return false // this will stop the execution of bottom line
    }
   
    if(addBtn.value == "Edit"){
        // Rename the todo element
        let target = editTodo.target.parentNode
        let p = target.querySelector('p')
        editDataFromLocalStorage(p)
        p.innerText = inputText
        addBtn.value = "Add"
     }else{
        // create li Element 
        const li = document.createElement("li");
        const p = document.createElement("p")
        p.innerHTML = inputText
        li.appendChild(p)
        todoList.appendChild(li)
        // create delete button
        const dltBtn = document.createElement("button")
        dltBtn.innerHTML = "Remove"
        dltBtn.classList.add("btn","deleteBtn")
        li.appendChild(dltBtn)
        // create edit button
        const edtBtn = document.createElement("button")
        edtBtn.innerHTML = "Edit"
        edtBtn.classList.add("btn","editBtn")
        li.appendChild(edtBtn)

        saveLocalStorage(inputText) // For storing data in Local storage
    }

    inputBox.value = "";
}

addBtn.addEventListener('click',addTodo)

// Delete todo list data
function deleteTodo(e){
// console.log('ul is running')
if(e.target.innerHTML == "Remove"){
    console.log("Remove button is click",e.target.parentElement)
    // todoList.removeChild(e.target.parentElement)
    deleteDataFromLocalStorage(e)
}

if(e.target.innerHTML == "Edit"){
    console.log("Edit button")
    let target = e.target.parentNode
    // console.log(target)
    let p = target.querySelector('p')
    // console.log(p)
    inputBox.value = p.innerHTML
    inputBox.focus()
    addBtn.value = "Edit";
    editTodo = e
}

}
todoList.addEventListener('click',deleteTodo)

// Save todos data in localStorage
const saveLocalStorage = (todo) => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos =  JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))  // In there when I use undefine value then it's give me error on line no 79 and 43
    // console.log(todos)
   
}

//Get data from localstorage and render it my dom load
const getDataFromLocalStorage = () => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos =  JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach( (todo) => {
        // create li Element 
        const li = document.createElement("li");
        const p = document.createElement("p")
        p.innerHTML = todo
        li.appendChild(p)
        todoList.appendChild(li)

        // create delete button
        const dltBtn = document.createElement("button")
        dltBtn.innerHTML = "Remove"
        dltBtn.classList.add("btn","deleteBtn")
        li.appendChild(dltBtn)

        // create edit button
        const edtBtn = document.createElement("button")
        edtBtn.innerHTML = "Edit"
        edtBtn.classList.add("btn","editBtn")
        li.appendChild(edtBtn)
    })
}
document.addEventListener('DOMContentLoaded',getDataFromLocalStorage)

//function to delete todo list data
const deleteDataFromLocalStorage = (todo) => {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    // console.log()
    let todoText = todo.target.parentNode.querySelector('p').innerHTML; // I face issue -1 becuase I didn't give .innerHtml
    let findIndex = todos.indexOf(todoText)
    todos.splice(findIndex , 1)
    // console.log(findIndex)
    localStorage.setItem('todos',JSON.stringify(todos))
}

const editDataFromLocalStorage = (todo) => {
    // console.log(todo)
    let todos = JSON.parse(localStorage.getItem('todos'))
    let indexNo = todos.indexOf(todo.innerHTML)
    todos[indexNo] = inputBox.value;
    localStorage.setItem('todos',JSON.stringify(todos))
}