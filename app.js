const root = document.querySelector('body')
const buttonAddNewTask = document.querySelector('.add')
const taskTitle = document.querySelector('#taskTitle')
const addTaskBeforeHere = document.querySelector('#addTaskBeforeHere')
const boxContainTaskComplete = document.querySelector('.task.complete')
const listTaskToDo = document.querySelector('.list-items.toDo')
const listTaskComplete = document.querySelector('.list-items.complete')
const themeSwitch = document.querySelector('.themeSwitch')
const iconEdit = `<span class="material-icons">edit</span> <span class="material-icons hidden">pending</span>`
const iconDelete = `<span class="material-icons">delete_outline</span>`
const iconComplete = `<span class="material-icons">check_circle_outline</span>`


boxContainTaskComplete.classList.add('hidden')

let taskToDrop;

const dragstart_handler = (ev) => taskToDrop = ev.target

const dragover_handler = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

const drop_handler = (ev) => {
    ev.preventDefault()
    ev.target.parentElement.appendChild(taskToDrop);
}

const removeClassHidden = (element) => element.classList.remove('hidden')

const addClassHidden= (element) => element.classList.add('hidden')

const hiddenTwofirstElement = (params) => params.forEach((element, index) => index < 2 ? addClassHidden(element) : removeClassHidden(element));

const editTitleTask = (ev) => {
    const titleTask = ev.currentTarget.previousElementSibling.firstElementChild
    const iconEdit = ev.currentTarget.firstElementChild
    if(iconEdit.classList.contains('hidden')) {
        titleTask.innerHTML = titleTask.nextElementSibling.value
        hiddenTwofirstElement([iconEdit.nextElementSibling, titleTask.nextElementSibling, titleTask, iconEdit])
    } else {
        titleTask.nextElementSibling.value = titleTask.innerHTML
        hiddenTwofirstElement([titleTask, iconEdit, iconEdit.nextElementSibling, titleTask.nextElementSibling])
    }
}

const moveToComplete = (ev) => {
    listTaskComplete.append(ev.currentTarget.parentElement);
    hiddenTwofirstElement([ev.currentTarget, ev.currentTarget.previousElementSibling.previousElementSibling, boxContainTaskComplete])
}

const deleteTask = (ev) => {
    ev.target.parentElement.remove()
    if(listTaskComplete.childElementCount === 0 ) boxContainTaskComplete.classList.add('hidden')
}

const createElement = (element, className, id = 0) => {
    const newElement = document.createElement(element)
    newElement.classList.add( element === 'button' || element === 'span'? id :  className)
    if(element.includes('span') || element.includes('button') ) newElement.innerHTML = className
    return newElement
}

const createNewTask = () => {
    if(taskTitle.value != '') {
        const li = createElement('li', 'list-item')
        const containTaskTitle = createElement('div', 'contain')
        const span = createElement('span', taskTitle.value, 'zero')
        const textarea = createElement('textarea', "hidden")
        const buttonEdit = createElement('button', iconEdit, 'one')
        const buttonDelete = createElement('button', iconDelete, 'two')
        const buttonSave = createElement('button', iconComplete, 'three')


        // disposition of all element in the task and default value
        containTaskTitle.append(span, textarea)
        li.append(containTaskTitle, buttonEdit, buttonDelete, buttonSave)
        listTaskToDo.insertBefore(li, addTaskBeforeHere)

        // task functionnality : delete, complete and edit
        buttonDelete.addEventListener('click', deleteTask)
        buttonSave.addEventListener('click', moveToComplete)
        buttonEdit.addEventListener('click', editTitleTask)
        
        // textarea auto sizing
        textarea.style.cssText = `overflow-y: hidden`;
        textarea.addEventListener("input", e => {
            textarea.style.height = "auto";
            let scHeight = e.target.scrollHeight;
            textarea.style.height =`${scHeight}px`;
        })
        // test of the draggable functionnality
        li.setAttribute("draggable","true")

        // clear input after click
        taskTitle.value = ''
    }
}

buttonAddNewTask.addEventListener('click', createNewTask)

const toggle_theme = () => {
    themeSwitch.classList?.toggle("active")
    root.classList?.toggle("active")
}

themeSwitch.addEventListener('click', toggle_theme)
