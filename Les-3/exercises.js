// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
let anArray = [1, 3, 2, 5];
function getLargestItemInArray() {
        let largestVal = Math.max(...anArray);
        return largestVal;    
}

console.log(getLargestItemInArray());

// Reverse order of array, e.g. [1,2,3] → [3,2,1]
let anotherArray = [1, 3, 2, 5,8];

function reverseArray() {
  let reverseArray = anotherArray.reverse();
  return reverseArray;
}
console.log(reverseArray());

// Make a sum of all elements, e.g. [1,2,3] → 6
let thirdArray = [1, 3, 2];
let sum = 0;
function arraySum() {
  for (let i=1; i <= thirdArray.length; i++) {
      let i = thirdArray[i];
      sum = sum + i;
      return sum;
  }
}
document.write(arraySum());

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {

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