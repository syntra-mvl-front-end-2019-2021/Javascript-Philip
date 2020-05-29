let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let sumButton = document.getElementById('sum-submit-btn');
let sum = document.getElementById('sum-result-container');
let productButton = document.getElementById('product-submit-btn');
let product = document.getElementById('product-result-container');

// console.log(input1);
// console.log(input2);
// console.log(sumButton);
// console.log(sum);

sumButton.addEventListener('click', printSum);

function printSum (event) {

    sum.innerText = parseInt(input1.value) + parseInt(input2.value);
    
}


productButton.addEventListener('click', printProduct);

function printProduct (event) {

    product.innerText = parseInt(input1.value) * parseInt(input2.value);
    
}