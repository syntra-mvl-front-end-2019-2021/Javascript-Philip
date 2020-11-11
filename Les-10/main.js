// function higherThanFive(num) {
//     return num > 4;
// }

// /**
//  * Copy van de filter function
//  * @param {function} callbackFunction
//  */
// Array.prototype.myFilter = function (callbackFunction) {
//     const newArray = [];

//     for (let i = 0; i < this.length; i++) {
//         const result = callbackFunction(this[i]);
//         if (result) {
//             newArray.push(this[i]);
//         }
//     }

//     return newArray;
// };

// const testArray = [1, 2, 3, 4, 5, 6];

// console.log('myFilter', testArray.myFilter(higherThanFive));

// console.log('filter', testArray.filter(higherThanFive));



// forEach
// function doSomething (val) {
//     console.log('Val is' + val);
// }

// const foreachTest = ['test','test2','test3'];

// Array.prototype.myForEach = function(doSomething) {
//     for (let i = 0; i < this.length; i++) {
//         doSomething(this[i])
//     }


// };

// foreachTest.myForEach(doSomething);
// foreachTest.forEach(doSomething);



//MAP
// function timesTwo(num) {
//     return num * 2;
// }

// const mapTestArray = [1, 2, 3, 4, 5, 6];

// Array.prototype.myMap = function(timesTwo) {
//     const newArray = [];
//     for (let i = 0; i < mapTestArray.length; i++) {
//         let result = timesTwo(mapTestArray[i]);
//         newArray.push(result);
//     }
//     return newArray;
// }

// console.log('map', mapTestArray.map(timesTwo));
// console.log('myMap', mapTestArray.myMap(timesTwo));



// function sumAllNumbers(sum, num) {
//     return sum + num;
// }

const reduceTestArray = [1, 2, 3, 4, 5, 6];



Array.prototype.myReduce = function(callbackFunction, initial) {
    let accumulator = initial;
    for (let i = 0; i < reduceTestArray.length; i++) {
        // let returnval = callbackFunction(accumulator,reduceTestArray[i]);
        // accumulator = returnval;
        initial = callbackFunction(initial,reduceTestArray[i]);
    }
    // return accumulator;
    return initial;
}

// console.log('reduce', reduceTestArray.reduce(sumAllNumbers,0));
// console.log('myReduce', reduceTestArray.myReduce(sumAllNumbers,0));


function highestNumber(accumulator, arrayVal) {
    if (accumulator > arrayVal) {
        return accumulator;
    }
    return arrayVal;
    //return Math.max(accumulator, arrayVal);
}



console.log('reduce', reduceTestArray.reduce(highestNumber,0));
console.log('myReduce', reduceTestArray.myReduce(highestNumber,0));