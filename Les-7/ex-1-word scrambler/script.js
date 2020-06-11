let submitButton = document.getElementById('submit-btn');
let resultText = document.getElementById('result-container');
let inputText = document.getElementById('user-input')
let letterInput = document.getElementById('letter-count')
let wordInput = document.getElementById('word-count')

function printText() {
    resultText.innerText = inputText.value;
    printWords();
    printLetters();

}

submitButton.addEventListener('click', printText)

function realtime() {
    resultText.innerText = inputText.value;
    printWords();
    printLetters();

}

inputText.addEventListener('input', realtime);


let string = inputText.value;


function printLetters() {
    let string = inputText.value;
    let letters = string.split('');
    for ( let letter in letters) {
        letterInput.innerText = letters.length;
    }
}

function printWords() {
    let string = inputText.value;
    let words = string.split(' ');
    for ( let j = 0; j < words.length; j++) {
        wordInput.innerText = words.length;
    }
}









// const wordArray = ['bla', 'bla2', 'bla3', 'bla4'];
// const randomIndex = Math.floor(Math.random() * wordArray.length);

// console.log(wordArray[randomIndex]);