const baseUrl = 'https://api.exchangeratesapi.io/';
const $container = document.getElementById('container');

function writeExchangeRate(rates) {
    const $dateTag = document.createElement('p');
    $dateTag.textContent = rates.date;

    const $baseTag = document.createElement('h4');
    $baseTag.textContent = rates.base;

    const $ulTag = document.createElement('ul');
    Object.keys(rates.rates).forEach(function (key) {
        const $liTag = document.createElement('li');
        $liTag.textContent = key + ': ' + rates.rates[key];
        // $liTag.textContent = key;
        $ulTag.append($liTag);
    })

    $container.append($dateTag, $baseTag, $ulTag);
}

const latest = fetch(baseUrl + 'latest', {
    method: 'GET'
});

// const latest = fetch(baseUrl + 'latest?base=EUR&symbols=USD,GBP', {
//     method: 'GET'
// });

latest.then(function (response) {
    if (!response.ok) {
        throw new Error('Fetch failed');
    }

    return response.json();
    // console.log(response.json());
}).then(function (jsonData) {
    console.log(jsonData);
    console.log(JSON.stringify(jsonData));
    writeExchangeRate(jsonData);
}).catch(function (error) {
    console.log(error);
})