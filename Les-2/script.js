let aVariable = 3;
let anotherVarialble = 5;

aVariable = anotherVarialble + 1;

console.log(aVariable); //6

function sum(a,b) {
    return a + b;
}

aVariable = sum(5,6);
console.log(aVariable); //11

aVariable = aVariable + 1;
console.log(aVariable); //12
aVariable += 2;
console.log(aVariable); //14

aVariable++;// == aVariable += 1 == aVariable = aVariable + 1;

let newVar = 5;
let otherNewVar = 5;
console.log(++newVar);
console.log(otherNewVar++);
console.log(otherNewVar);

let a = 10 + 10; //20
let b = 5 * 5; // 25
let c = 12 - 6;//6
let d = 20 / 5; //4

// js probeert 'a' bij nummer altijd om te zetten nr boolean
// 0 is false, ander nummer is true
// bij string met meer tekens dan 0 ook true
// lege string is false -> !' ' --> true

    if(a) {
        console.log('joepie ik ben true');

} else if (c) {
    console.log('jammer ik niet');
}
    else {
        console.log('helemaal niet');
    }




if( true && true) {
    console.log('allebei true');
}

if( true || false) {
    console.log('ééntje is genoeg');
}

if ( true && ( true || false)) {
    console.log('hoe meer zielen hoe meer vreugde');
}


let aString;
if ( d > 5) {
    aString = 'grote dan 5';
} else {
    aString = ' kleiner of gelijk aan 5';
}

let bString = d > 5 ? 'Groter dan 5' : 'Kleiner of gelijk aan 5';