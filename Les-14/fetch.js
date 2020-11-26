let baseUrl = 'https://api.exchangeratesapi.io/';

let rates = fetch(baseUrl + 'latest', {
    method: 'GET'
});

rates.then(function (response) {
    console.log(response);
    if (!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
}).then(function (jsonData) {
    console.log(jsonData);
    insertInPage(jsonData);
}).catch(function (error) {
    console.log(error);
})

function insertInPage(rates) {

    let eur = document.querySelector('.eur');
    let usd = document.querySelector('.usd');

    let inputEur = document.querySelector('.input-eur');
    let inputUsd = document.querySelector('.input-usd');

    function chooseEur1() {
        inputEur.value = 1;

        let val = Object.values(rates);
        console.log(val);
        // if (val)
        //     inputUsd.value = Object.values(rates.rates);
    }

    eur.addEventListener('click', chooseEur1);
}


