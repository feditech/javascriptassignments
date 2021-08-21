

let addTodo = () => {
    let todo = document.getElementById("todo")
    let list = document.getElementById("list-ul")

    list.innerHTML += `
    <li class="list-li">
    <input type="text" disabled value="${todo.value}" id="todo-task">
<button type="button" class="btn btn-primary">Edit</button>
<button type="button" class="btn btn-danger">Delete</button>
</li>`

    firebase.database
    console.log("fediboi109")

}


let delAll = () => {

}