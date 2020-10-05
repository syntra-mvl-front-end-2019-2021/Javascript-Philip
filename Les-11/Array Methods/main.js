/*
 * ARRAY MAP EXERCISES
 */

// Make an array of numbers that are doubles of the first array
// Example:
// input: [1,2,3]
// expected output: [2,4,6]
function doubleNumbersCallback (val) {
    return val*2;
}
function doubleNumbers(arr) {
    // your code here
    return arr.map(doubleNumbersCallback);
}

// Take an array of numbers and make them strings
// Example:
// input: [1,2,3]
// expected output: ['1','2','3']

function arrayToString (array) {
    let arrToString = array.toString();
    return arrToString;
}
function stringItUp(arr) {
    // your code here
    return arr.map(arrayToString);
}

// Capitalize each of an array of names
// Example:
// input: ['jan', 'AN', 'Ben']
// expected output: ['Jan', 'An', 'Ben']
function capitalize (name) {
    let firstLetter = name.charAt(0);
    let names = firstLetter.toUpperCase() + name.slice(1).toLowerCase();
    return names;
}

function capitalizeNames(arr) {
    // your code here
    return arr.map(capitalize);
}

// Make an array of strings of the names
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: ['Jan', 'An']
function namesInArray(names) {
    return names.name;
}

function namesOnly(arr) {
    // your code here
    return arr.map(namesInArray);
}

// Make an array of strings of the names saying whether or not they can go to The Matrix (older than 18)
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: ['Jan is under age!!', 'An can go to The Matrix']

function oldEnough(names) {
    let ages = names.age;
    let name = names.name;
    if( ages > 18) { 
        return name + ' can go to The Matrix'}
    else {
        return name + ' is under age!!'
    };
}

function makeStrings(arr) {
    // your code here
    return arr.map(oldEnough);
}

/*
 * ARRAY REDUCE EXERCISES
 */

// Turn an array of numbers into a total of all the numbers
// Example:
// input: [1,2,3]
// expected output: 6
function totalOfNumbers(numbers,initial) {
   return numbers + initial;
}

function total(arr) {
    // your code here
    return arr.reduce(totalOfNumbers);
}

// Turn an array of numbers into a long string of all those numbers.
// Example:
// input: [1,2,3]
// expected output: '123'
function string(numbers, initial ) {
    return numbers.toString() + initial;
}

function stringConcat(arr) {
    // your code here
    return arr.reduce(string);
}

// Turn an array of voter objects into a count of how many people voted
// Example:
// input: [{name: 'Jan', age: 12, voted: false}, {name: 'An', age: 33, voted: true}, {name: 'Ben', age: 21, voted: true}]
// expected output: 2

// function whoVoted(person, initial) {
//     console.log(person.whoVoted); 
// }

// function totalVotes(arr) {
//     // your code here
//     return arr.reduce(whoVoted);
// }

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// Example:
// input: [{ title: "Snoep", price: 500 }, { title: "Brood", price: 200 },]
// expected output: 700

// function cost(items, initial) {
//     console.log(items.price);    
// }

// function shoppingSpree(arr) {
//     // your code here
//     return arr.reduce(cost);
// }

// Given an array of arrays, flatten them into a single array
// Example:
// input: [[1,2,3],[6,5,4]]
// expected output: [1,2,3,6,5,4]

function newArray (array,initial) {
    let newArray = array + initial;
    return newArray.concat();
}

function flatten(arr) {
    // your code here
    return arr.reduce(newArray);

}

/*
 * ARRAY FILTER EXERCISES
 */

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// Example:
// input: [1,2,3,6,5,4]
// expected output: [6,5]
function greaterThan (numbers) {
    return numbers >= 5;
}

function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter(greaterThan);
}

// Given an array of numbers, return a new array that only includes the even numbers.
// Example:
// input: [1,2,3,6,5,4]
// expected output: [2,6,4]

function evenNumbers(numbers) {
    if (numbers % 2 === 0) {
        return numbers;
    }
}

function evensOnly(arr) {
    // your code here
    return arr.filter(evenNumbers);
}

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// Example:
// input: ['lange string', 'kort']
// expected output: ['kort']

function length (string) {
    if(string.length <= 5) {
        return string;
    }
}

function fiveCharactersOrFewerOnly(arr) {
    // your code here
    return arr.filter(length);
}

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// Example:
// input: [{name: 'Jan', age: 12, member: false}, {name: 'An', age: 33, member: true}, {name: 'Ben', age: 21, member: true}]
// expected output: [{name: 'Jan', age: 12, member: false}, {name: 'Ben', age: 21, member: true}]

function members (people) {
    if(people.member) {
        return people;
    }
}

function peopleWhoBelongToTheIlluminati(arr) {
    // your code here
    return arr.filter(members);
}

// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
// Example:
// input: [{name: 'Jan', age: 12}, {name: 'An', age: 33}]
// expected output: [{name: 'An', age: 33}]

function rightAge (number) {
    if(number.age > 18) {
        return number;
    }
}

function ofAge(arr) {
    // your code here
    return arr.filter(rightAge);
}
