let doc = document

function access(varname) {
    return doc.querySelector(varname)
}

let todoInput = access('#todo-input')
let todoList = access('.todo-list')


todoInput.addEventListener('keydown' , addNewTodo)

function addNewTodo(event) {
    event.preventDefault()
    if (event.key == 'Enter') {
        if (todoInput.value == '') {
            todoInput.placeholder = 'Fill in the blank !'
        } else {
            todoInput.placeholder = ''
            todoList.style.border = '0.01rem solid #202b4a5a'

            let newTodoItem = doc.createElement('li')
            let newTodoItemSpan = doc.createElement('span')
            let newTodoItemIcon = doc.createElement('i')

            newTodoItem.className = 'todo-item d-flex-between'
            newTodoItemSpan.innerText = todoInput.value
            newTodoItemSpan.className = 'd-flex-start'
            newTodoItemIcon.className = 'fa fa-trash-o delete delet-icon'

            newTodoItem.append(newTodoItemSpan)
            newTodoItem.append(newTodoItemIcon)
            todoList.append(newTodoItem)

            todoInput.value = ''

            newTodoItemIcon.addEventListener('click' , delet)
                function delet(event) {
                event.target.parentElement.remove()
                // 2 newTodoItem.remove()
                todoList.style.border = '0px'
            }
        }
    }
}

function delet(event) {
    console.log(event.target)
}