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
  const gameState = {
    word: [],
    hangman: 1,
    turn: 1,
    lettersFound: 0,
    won: false,
    lost: false,
  };
  
  // function initGame() {
  //   // choose a random word > save in gamestate
  //   // reset gamestate
  //   // update solutionContainer > insert div.solution-letter per letter
  //   // empty winOrLoseContainer.innerHTML
  //   // remove success and failed classes from .letter
  // }
  
  // function clickLetter(event) {
  //   // check if event.target is .letter
  //   // check if event.target has success or failed class
  //   // ---
  // }
  
  // hangManImage.setAttribute('src', 'images/hangman02.png');

window.addEventListener('load', initGame)


  function initGame() {
    addLetters();
    
    
  }

  let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)].toUpperCase();
  let randomWordArr = randomWord.split('');
  
 function addLetters() {
    // let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
    console.log(randomWord);
    let letter = document.querySelector('.solution-letter');
    // console.log(letter);
    
    // let randomWordArr = randomWord.split('');
    // console.log(randomWordArr);
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
    // console.log(letter.target, letter.target.matches('.letter'));
    // console.log(clickedLett);

    let randomWordArrLett = randomWord[i];
    for (randomWordArrLett of randomWord) {

      if( clickedLett === randomWordArrLett) {
        
        letter.target.classList.add('success');
        
        console.log(divLett);
        console.log(randomWordArrLett);
        console.log(clickedLett);
        console.log(solutionContainer);
        console.log(solutionContainer.length);

        
        }
        
      
      else {
        letter.target.classList.add('failed');
      }
    }
        
  }