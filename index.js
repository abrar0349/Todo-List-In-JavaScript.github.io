let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

// console.log(inputBox,addBtn,todoList)

let editTodo = null;

addBtn.addEventListener('click',addTodo)

function addTodo(){
    let inputText = inputBox.value.trim()
    // console.log(inputText)
    if(inputText.length <= 0){
        alert("please Enter the value");
        return false // this will stop the execution of bottom line
    }
   
    if(addBtn.value == "Edit"){
        // Rename the todo element
        let target = editTodo.target.parentNode
        let p = target.querySelector('p')
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
    }

    inputBox.value = "";
}


function updateTodo(e){

if(e.target.innerHTML == "Remove"){
    console.log("Remove button is click")
    todoList.removeChild(e.target.parentElement)
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

todoList.addEventListener('click',updateTodo)