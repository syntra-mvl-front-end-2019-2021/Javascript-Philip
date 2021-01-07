// Extra Tasks:
// No submit with empty description
// Error handling
// Do not reload whole list after update, create, delete

const $listContainer = document.getElementById('list-container');
const $formModal = document.getElementById('form-modal');
const $addBtn = document.getElementById('add-btn');
const todoForm = document.forms['todo-form'];

let allTodoItems = {};

function printTodoList(todoItems, clear) {

    if (clear) {
        $listContainer.innerHTML = '';
    }

    let $todoItems = '';
    console.log($todoItems);

    todoItems.forEach(function (item) {
        $todoItems += `<div data-id = "${item.id}" class="list-item ${item.done ? 'list-item--done' : ''
            }">
    <p class="list-item__description">${item.description}</p>
    <div class="list-item__actions">
        <button class="list-item__update">Update</button>
        <button class="list-item__delete">Delete</button>
    </div>
</div>`;
        // console.log(todoItems);
        // console.log(item);
    });
    $listContainer.insertAdjacentHTML('beforeend', $todoItems);
}

function saveTodoList(todoItems, clear) {
    if (clear) {
        allTodoItems = {};
    }
    todoItems.forEach(function (item) {
        allTodoItems[item.id] = item;
        console.log(item);
    });

}



function fetchAllTodos() {
    $listContainer.classList.add('loading');

    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
        method: 'GET',
        headers: {
            Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
        },
    })
        .then((result) => {
            if (!result.ok) {
                throw new Error('No luck');
            }

            return result.json();
        })
        .then(function (result) {
            saveTodoList(result.data);
            printTodoList(result.data, true);

            // console.log(result);
            // console.log(result.data);
            // console.log(result.data[0].id);

            $listContainer.classList.remove('loading');
        })
        .catch(function (error) {
            console.error(error);
            $listContainer.classList.remove('loading');
        });
}

function postNewTodo(body) {
    $formModal.classList.add('loading');

    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
        method: 'POST',
        headers: {
            Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((result) => {
            if (!result.ok) {
                throw new Error('No luck');
            }

            return result.json(); // JSON.parse
        })
        .then(function (result) {
            console.log(result);
            fetchAllTodos();
            todoForm.reset();
        })
        .catch(function (error) {
            console.error(error);
        });
}

function updateTodo(id, body) {
    $formModal.classList.add('loading');

    fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id,
        {
            method: 'PATCH',
            headers: {
                Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
    )
        .then((result) => {
            if (!result.ok) {
                throw new Error('No luck');
            }

            return result.json(); // JSON.parse
        })
        .then(function (result) {
            console.log(result);
            fetchAllTodos();
            todoForm.reset();
        })
        .catch(function (error) {
            console.error(error);
        });
}

function deleteTodo(id) {
    $listContainer.classList.add('loading');

    fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id,
        {
            method: 'DELETE',
            headers: {
                Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
            },
        }
    )
        .then((result) => {
            if (!result.ok) {
                throw new Error('No luck');
            }

            fetchAllTodos();
        })
        .catch(function (error) {
            console.error(error);
        });
}

function listContainerClick(event) {
    if (event.target.matches('.list-item__update')) {
        clickUpdate(event);
    }

    if (event.target.matches('.list-item__delete')) {
        clickDelete(event);
    }
}

function openModal(item) {
    $formModal.classList.add('modal__background--active');

    if (item) {
        todoForm.elements.id.value = item.id;
        todoForm.elements.done.checked = item.done;
        todoForm.elements.description.value = item.description;
    }
}

function closeModal() {
    $formModal.classList.remove('loading');
    todoForm.elements.id.value = '';
    $formModal.classList.remove('modal__background--active');
}

function todoItemFromForm() {
    return {
        done: todoForm.elements.done.checked,
        description: todoForm.elements.description.value,
    };
}

function submitForm(event) {
    event.preventDefault();
    const id = todoForm.elements.id.value;
    const body = todoItemFromForm();
    const description = todoForm.elements.description.value;

    if (description === "") {
        alert('Please fill in the Description field.')
    }

    else {
        if (id) {
            updateTodo(id, body);
        } else {
            postNewTodo(body);
        }
    }
}

function clickAdd() {
    openModal();
}

function clickUpdate(event) {
    const $listItem = event.target.closest('.list-item');
    const id = parseInt($listItem.dataset.id);

    openModal(allTodoItems[id]);
}

function clickDelete(event) {
    const $listItem = event.target.closest('.list-item');
    const id = parseInt($listItem.dataset.id);
    deleteTodo(id);

}

fetchAllTodos();

$listContainer.addEventListener('click', listContainerClick);
$addBtn.addEventListener('click', clickAdd);
todoForm.addEventListener('reset', closeModal);
todoForm.addEventListener('submit', submitForm);


// function submitTodoForm(event) {
//     event.preventDefault();
//     const id = $todoForm.elements.id.value;
//     const body = todoItemFromForm();
//     const description = $todoForm.elements.description.value;

//     if (description === "") {
//         alert('Please fill in the Description field.')
//     }

//     else {
//         if (id) {
//             updateTodo(id, body);
//         } else {
//             postNewTodo(body);
//         }
//     }
// }