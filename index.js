let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

// console.log(inputBox,addBtn,todoList)

addBtn.addEventListener('click',addTodo)

function addTodo(){
    console.log("add todo")
    let inputText = inputBox.value.trim()
    if(inputText.length <= 0){
        alert("please Enter the value")
    }
}