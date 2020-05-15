// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
// let anArray = [1, 2, 3];
// function getLargestItemInArray() {
//         let largestVal = Math.max(...anArray);
//         return largestVal;    
// }
// let array = [1,2,3]
      function  getLargestItemInArray(array) {
        let largestVal = array[0];
        for ( let i = 0; i < array.length; i++){
              if( array[i] > largestVal   ) {
                  largestVal = array[i]
                                            }
                                               }
 return largestVal;
                                        }


// Reverse order of array, e.g. [1,2,3] → [3,2,1]
// let anotherArray = [1, 2, 3];

function reverseArray(anotherArray) {
  let reversed = anotherArray.reverse();
  return reversed;
}
// console.log(reverseArray());

// Make a sum of all elements, e.g. [1,2,3] → 6
// let thirdArray = [1, 3, 2];

function arraySum(thirdArray) {
  let sum = 0;
  for (let i=0; i < thirdArray.length; i++) {
      sum = sum + thirdArray[i];
        }
  return sum;
}
// console.log(arraySum());

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
// let anArray = ['Dog', 'cat', 'snake'];
function stringOfFirstLetters(anArray) {

  let firstLetter = anArray[0].substring(0,1);
  for ( let i = 1; i < anArray.length; i++)   
{
 firstLetter += anArray[i].substring(0,1)

}
return firstLetter
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
// let array1 = ['a','b','c'];
// let array2 = [1,2,3];


function combineArrays(array1, array2) {

  let comArr = [];
  let length = array1.length + array2.length;
  
      for (let i = 0; i < length; i++) {
        if (array1[i] !== undefined) {
            comArr.push(array1[i]);
        }

        if (array2[i] !== undefined) {
            comArr.push(array2[i]);
        }
    }
  
  return comArr;
  }

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
// let numbers = 2342;

function numberToDigitArray(aNumber) {

let numArr = Array.from(aNumber.toString()).map(Number);
return numArr;

}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {
      
  let wordArr = aString.split(' ');
  let newArr = [];

  for ( let i in wordArr) {
    // let word = wordArr[i]
    let firstLet = wordArr[i].charAt(0);
    let otherLet = wordArr[i].substring(1);

    if (firstLet === firstLet.toUpperCase()) {
      otherLet = otherLet.substring(0,1).toUpperCase()
      + otherLet.substring(1);

      firstLet = firstLet.toLowercase();
    }

  let newWord = otherLet + firstLet + 'ay';
  newArr.push(newWord);

  }

// return newArr;
return newArr.join(' ');
}

// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
// if (iets = 'h') {
// iets doen
// } else if (iets = 'e') {
    
// }...

// switch (iets) {
//     case 'H':
//     case 'h':
//         console.log('h');
//         break;
//     case 'e':
//         console.log('e');
//         break;
//     default:
//         console.log('kweetnie');
//         break;    
// }

function letterToMorse(letter) {
  let morseLetter ='';

  switch (letter.toLowerCase()) {
    
    case 'a':
            morseLetter = '*_';
            break; 
    case 'b':
            morseLetter = '_***';
            break; 
     case 'c':
            morseLetter = '_*_*';
            break; 
     case 'd':
            morseLetter = '_**';
            break; 
     case 'e':
            morseLetter = '*';
            break; 
     case 'f':
            morseLetter = '**_*';
            break; 
     case 'g':
            morseLetter = '__*';
            break; 
     case 'h':
            morseLetter = '****';
            break; 
     case 'i':
            morseLetter = '**';
            break; 
     case 'j':
            morseLetter = '*___';
            break; 
     case 'k':
            morseLetter = '_*_';
            break; 
     case 'l':
            morseLetter = '*_**';
            break; 
     case 'm':
            morseLetter = '__';
            break; 
     case 'n':
            morseLetter = '_*';
            break; 
     case 'o':
            morseLetter = '___';
            break; 
     case 'p':
            morseLetter = '*__*';
            break; 
     case 'q':
            morseLetter = '__*_';
            break; 
     case 'r':
            morseLetter = '*_*';
            break; 
     case 's':
            morseLetter = '***';
            break; 
     case 't':
            morseLetter = '_';
            break; 
     case 'u':
            morseLetter = '**_';
            break; 
     case 'v':
            morseLetter = '***_';
            break; 
     case 'w':
            morseLetter = '*__';
            break; 
     case 'x':
            morseLetter = '_**_';
            break; 
     case 'y':
            morseLetter = '_*__';
            break; 
    case 'z':
            morseLetter = '__**';
            break;
            
}

return morseLetter;

}

// let string = prompt('geef woord');
let string = 'geef woord';

function translateToMorse() {

  let stringArr = string.split('');
  let resultArr = [];

  for (let i in stringArr) {
    let curLetter = stringArr[i];

    if (curLetter === ' ') {

        resultArr.push(' ');

    }
    else {
      resultArr.push(letterToMorse(curLetter) + '|');
    }
      

  }

  return resultArr.join('');

}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {

}