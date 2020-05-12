// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
// let anArray = [1, 2, 3];
// function getLargestItemInArray() {
//         let largestVal = Math.max(...anArray);
//         return largestVal;    
// }
let array = [1,2,3]
      function  getLargestItemInArray() {
        let largestVal = array[0];
        for ( let i = 0; i < array.length; i++){
              if( array[i] > largestVal   ) {
                  largestVal = array[i]
                                            }
                                               }
 return largestVal;
                                        }


// Reverse order of array, e.g. [1,2,3] → [3,2,1]
let anotherArray = [1, 2, 3];

function reverseArray() {
  let reversed = anotherArray.reverse();
  return reversed;
}
// console.log(reverseArray());

// Make a sum of all elements, e.g. [1,2,3] → 6
let thirdArray = [1, 3, 2];

function arraySum() {
  let sum = 0;
  for (let i=0; i < thirdArray.length; i++) {
      sum = sum + thirdArray[i];
        }
  return sum;
}
// console.log(arraySum());

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
let anArray = ['Dog', 'cat', 'snake'];
function stringOfFirstLetters() {

  let x = anArray[0].substring(0,1);
  for ( let i = 1; i < anArray.length; i++)   
{
 x += anArray[i].substring(0,1)

}
return x
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
function combineArrays(arrayOne, arrayTwo) {

}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
function numberToDigitArray(aNumber) {

}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {

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

function translateToMorse(aString) {

}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {

}