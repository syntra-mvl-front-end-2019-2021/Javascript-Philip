let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let sumButton = document.getElementById('sum-submit-btn');
let sum = document.getElementById('sum-result-container');
let productButton = document.getElementById('product-submit-btn');
let product = document.getElementById('product-result-container');
let addInputButton = document.getElementById('add-input-btn');


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


addInputButton.addEventListener('click', addInput);


function addInput (event) {



let newFieldDiv = document.createElement('div');
let newControlInputDiv = document.createElement('div');
let newInput = document.createElement('input');
let newControlDeleteDiv = document.createElement('div');
let newADelete = document.createElement('a');
let inputContainer = document.getElementById('input-container')

newADelete.innerText = 'X';


inputContainer.appendChild(newFieldDiv);
newFieldDiv.appendChild(newControlInputDiv);
newControlInputDiv.appendChild(newInput);
newFieldDiv.appendChild(newControlDeleteDiv);
newControlDeleteDiv.appendChild(newADelete);

newFieldDiv.setAttribute('class', 'field has-addons number-input-group');
newFieldDiv.setAttribute('id', 'new-input-field');
newControlInputDiv.setAttribute('class', 'control');
newInput.setAttribute('id', 'input-3');
newInput.setAttribute('class', 'input number-input');
newInput.setAttribute('type', 'number');
newInput.setAttribute('step', '1');
newInput.setAttribute('value', '0');
newControlDeleteDiv.setAttribute('class', 'control');
newControlDeleteDiv.setAttribute('id', 'remove-button');
newADelete.setAttribute('class', 'button is-danger delete-number-input');

let clicked = addInputButton.addEventListener('click', addInput);


if ( !clicked) {

    let removeButton = document.getElementById('remove-button');
    removeButton.addEventListener('click', removeInput);
    
    function removeInput (event) {
    
        let removed = document.getElementById('new-input-field');
        removed.remove();
    }

    // console.log('true');
    
}

}




