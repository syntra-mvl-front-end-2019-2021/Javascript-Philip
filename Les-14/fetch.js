let firstSelect = document.querySelector('.first-select');
let secondSelect = document.querySelector('.second-select');

let firstInput = document.querySelector('.input-1');
let secondInput = document.querySelector('.input-2');
let date = document.querySelector('.date-input');

// function getDate(date) {
//     let newDate = new Date();
//     let chooseDate = newDate.toLocaleDateString('en-CA');
//     date.value = chooseDate;
//     return chooseDate;
// }

function getDate() {
    let newDate = date.value;
    // let chooseDate = newDate.toLocaleDateString('en-CA');
    return newDate;
    // console.log(newDate);
}
console.log(getDate());

function chooseCurr() {
    let baseUrl = 'https://api.exchangeratesapi.io/';
    // let firstCurr = firstSelect.value;
    let secondCurr = secondSelect.value;

    let rates = fetch(baseUrl + getDate(), {
        method: 'GET'
    });


    rates.then(function (response) {
        console.log(response);
        if (!response.ok) {
            throw new Error('Fetch failed');
        }
        let x = response.json();
        return x;
    }).then(function (x) {
        console.log(x);
        firstInputVal = 1;
        secondInput.value = x.rates[secondCurr];
    }).catch(function (error) {
        console.log(error);
    })
}
chooseCurr();
// firstSelect.addEventListener('change', chooseCurr);
secondSelect.addEventListener('change', chooseCurr);
date.addEventListener('change', getDate);