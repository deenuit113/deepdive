const createBtn = document.getElementById('create-btn');
const list = document.getElementById('list');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo() {
    const item = {
        id: new Date().getTime(),
        text: '밥먹기',
        complete: false,
    }

    todos.unshift(item);

    const {
        itemEl,
        inputEl,
        removeBtnEl,
        editBtnEl,
    } = createTodoElement(item);

    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');
    inputEl.focus();

    saveToLocalStorage();

}

function createTodoElement(item) {
    console.log('1');
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    
    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    if(item.complete) {
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute("disabled","");

    const actionEl = document.createElement('div');
    actionEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons','remove-btn');
    removeBtnEl.innerText = 'remove_circle';

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked;

        if(item.complete) {
            itemEl.classList.add('complete');
        } else {
            itemEl.classList.remove('complete');
        }
        saveToLocalStorage();
    });

    inputEl.addEventListener('input', () => {
        item.text = inputEl.value;
    })

    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled','');
        saveToLocalStorage();
    });

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    });

    removeBtnEl.addEventListener('click', () => {
        // 데이터 지우기 CRUD Delete > filter
        todos = todos.filter(todo => todo.id !== item.id);

        // 요소 지우기
        itemEl.remove();
        saveToLocalStorage();
    });

    return {
        itemEl,
        inputEl,
        editBtnEl,
        removeBtnEl,
    }
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('todos');

    if (data) {
        todos = JSON.parse(data);
    }
}

function displayTodos() {
    loadFromLocalStorage();

    for(let i = 0; i < todos.length; i++){
        const item = todos[i];
        const {itemEl} = createTodoElement(item);
        list.append(itemEl);
    }
}

displayTodos();