let submitButton = document.getElementById('submit-btn');
let resultText = document.getElementById('result-container');
let inputText = document.getElementById('user-input')
let letterInput = document.getElementById('letter-count')
let wordInput = document.getElementById('word-count')



// function printText() {
//     resultText.innerText = inputText.value;
//     countWords();
//     countLetters();

// }


function printText() {
    resultText.innerText = inputText.value;
    countWords();
    countLetters();
    
}

submitButton.addEventListener('click', printText)

function realtime() {
    resultText.innerText = inputText.value;
    countWords();
    countLetters();
    wordScrambler()
}

inputText.addEventListener('input', realtime);


// let string = inputText.value;


function countLetters() {
    let string = inputText.value;
    let letters = string.split('');
    for ( let letter in letters) {
        letterInput.innerText = letters.length;
    }
}

function countWords() {
    let string = inputText.value;
    let words = string.split(' ');
    for ( let j = 0; j < words.length; j++) {
        wordInput.innerText = words.length;
    }
}


function wordScrambler() {
    let string = inputText.value;
    let wordArr = string.split(' ');
    let newString = [];
    
    
    
    for ( let random in wordArr) {
        let random = Math.floor(Math.random() * wordArr.length);
        let randomWord = wordArr[random];
        newString.push(randomWord);
    }


    

    resultText.innerText = newString.join(' ');


    // console.log(wordArr[random]);
    // console.log(randomWord);
    // console.log(newString.push(randomWord));

}






// const wordArray = ['bla', 'bla2', 'bla3', 'bla4'];
// const randomIndex = Math.floor(Math.random() * wordArray.length);

// console.log(wordArray[randomIndex]);