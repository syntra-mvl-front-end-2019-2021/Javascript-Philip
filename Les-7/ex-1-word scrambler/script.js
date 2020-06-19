let submitButton = document.getElementById('submit-btn');
let resultText = document.getElementById('result-container');
let inputText = document.getElementById('user-input')
let letterInput = document.getElementById('letter-count')
let wordInput = document.getElementById('word-count')

let string = inputText.value;

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


    

    resultText.innerText = inputText.value + newString.join(' ');


    // console.log(wordArr[random]);
    // console.log(randomWord);
    // console.log(newString.push(randomWord));

}






// const wordArray = ['bla', 'bla2', 'bla3', 'bla4'];
// const randomIndex = Math.floor(Math.random() * wordArray.length);

// console.log(wordArray[randomIndex]);


// //select textarea
// let userInput = document.getElementById('user-input');
// //select btn
// let submitBtn = document.getElementById('submit-btn');
// //select result container
// let resultContainer = document.getElementById('result-container');
// //# select wordCount
// let wordCountContainer = document.getElementById('word-count');
// //# select letterCount
// let letterCountContainer = document.getElementById('letter-count');

// function getUserInput() {
//     //return value of userInput
//     return userInput.value;
// }

// function textToWordArray(text) {
//     //return array of words
//     return text.split(' ');
// }

// function arrayToText(array) {
//     return array.join(' ');
// }

// function getRandomNumber(max) {
//     //return random number between 0 and max (including 0 and excluding max)
//     return Math.floor(Math.random() * max);
// }

// function scrambleArray(oldArray) {
//     //return scrambled array
//     //   for (let i = oldArray.length-1; i >=0; i--) {
//     //     let randomIndex = getRandomNumber(i);
//     //     let randomValue = oldArray[randomIndex];
//     //     let arrayValue = oldArray[i];
//     //     oldArray[i] = randomValue;
//     //     oldArray[randomIndex] = arrayValue;
//     //   }

//     const scrambledArray = [];
//     while (oldArray.length > 0) {
//         const randomIndex = getRandomNumber(oldArray.length);
//         const randomValue = oldArray.splice(randomIndex, 1);
//         scrambleArray.push(randomValue[0]);
//     }

//     return scrambleArray;
// }

// function updateWordCount(array) {
//     //# return word count
//     wordCountContainer.innerHTML = array.length;
// }

// function updateLetterCount(text) {
//     //# return letter count
//     letterCountContainer.innerHTML = text.length;
// }

// function scrambleText(text) {
//     // return scrambled text
//     let array = textToWordArray(text);
//     updateWordCount(array);
//     let scrambled = scrambleArray(array);
//     return arrayToText(scrambled);
// }

// function scramble() {
//     // update textContent of resultContainer
//     let text = getUserInput();
//     let scrambledText = scrambleText(text);
//     resultContainer.innerHTML = scrambledText;
//     updateLetterCount(text);
// }

// //add click event listener to submitBtn
// submitBtn.addEventListener('click', scramble);
// //## add input event listener to userinput for realTimeScramble
// userInput.addEventListener('input', scramble);