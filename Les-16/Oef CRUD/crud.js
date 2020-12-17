let $container = document.querySelector('.container');


function fetchAllTodos() {
    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
        }
    })
        .then(result => {
            if (!result.ok) {
                throw new Error('No luck');
            }

            return result.json();
        })
        .then(function (result) {
            console.log(result);
            console.log(result.data);
            let val = result.data;
            console.log(Object.values(val));
            let ids = Object.keys(result.data);
            // console.log(ids);
            ids.forEach(function () {
                let p = document.createElement("p");
                console.log(p);
                console.log($container);
                p.innerHTML = ids[0]++;
                $container.appendChild(p);
            });
        })
        .catch(function (error) {
            console.error(error)
        });
}

// fetchAllTodos();
document.forms.todoform.addEventListener('submit', fetchAllTodos);