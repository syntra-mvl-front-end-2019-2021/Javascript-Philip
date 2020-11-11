const randomWords = [
  'condition',
  'bottom',
  'lineage',
  'trip',
  'reporter',
  'paper',
  'colorful',
  'agent',
  'justify',
  'torture',
  'cap',
  'earthflax',
  'payment',
  'research',
  'picture',
  'garage',
  'honor',
  'memorial',
  'planet',
  'biography',
  'profound',
  'rumor',
  'gear',
  'bedroom',
  'orthodox',
  'penalty',
  'grief',
  'promote',
  'roof',
  'suite',
  'moving',
  'killer',
  'museum',
  'essay',
  'fever',
  'dignity',
  'shadow',
  'enjoy',
  'kill',
  'shy',
  'counter',
  'pawn',
  'button',
  'bullet',
  'skin',
  'rate',
  'shop',
  'consider',
  'other',
  'prospect',
];
let init = document.querySelector('body');
const hangManImage = document.querySelector('#image');
const solutionContainer = document.querySelector('#solution-container');
const winOrLoseContainer = document.querySelector('#win-lose-container');
const letterContainer = document.querySelector('#letter-container');
let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)].toUpperCase();
console.log(randomWords.length);
let randomWordArr = randomWord.split('');
let containerLetters = solutionContainer.children;
const gameState = {
  word: [],
  hangman: 1,
  turn: 0,
  lettersFound: 0,
  won: false,
  lost: false,
};



window.addEventListener('load', initGame)


function initGame() {
  addLetters();
      
}



function addLetters() {
  
  console.log(randomWord);
  let letter = document.querySelector('.solution-letter');
  // console.log(letter);
  
  for ( i = 1; i < randomWordArr.length; i++) {
    let newLetters = letter.cloneNode(true);
      solutionContainer.appendChild(newLetters);

  }

}

letterContainer.addEventListener('click', clickLetter);

let divLett = document.getElementsByClassName('solution-letter');
//  console.log(divLett);

function clickLetter(letter) {
 let clickedLett = letter.target.innerHTML;
 gameState.turn++;
//  console.log(gameState.turn);
//  console.log(gameState.hangman);
 // console.log(randomWordArr);
  // console.log(randomWordArrLett);
  
  
  
  for (let j = 0;j < randomWordArr.length;j++) {
    let randomWordArrLett = randomWordArr[j];

    if( clickedLett === randomWordArrLett) {
      
      letter.target.classList.add('success');
      gameState.lettersFound++;
      console.log(gameState.lettersFound);
      let index = randomWordArr.indexOf(clickedLett);
      // console.log(index);
      let indexContainer = containerLetters[index];
      // console.log(indexContainer);
      indexContainer.innerText = clickedLett.value;
      // console.log(solutionContainer);
      
      
    }
    else {
      letter.target.classList.add('failed');
      gameState.hangman++;
      hangManImage.setAttribute('src', 'images/hangman0' + gameState.hangman + '.png');
    }
  }
}