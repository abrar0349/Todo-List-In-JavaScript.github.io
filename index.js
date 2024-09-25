let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

// console.log(inputBox,addBtn,todoList)

addBtn.addEventListener('click',addTodo)

function addTodo(){
    let inputText = inputBox.value.trim()
    // console.log(inputText)
    // console.log(inputText.length <= 0)
    if(inputText.length <= 0){
        alert("please Enter the value");
        return false // this will stop the execution of bottom line
    }
     
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
}
}
todoList.addEventListener('click',updateTodo)