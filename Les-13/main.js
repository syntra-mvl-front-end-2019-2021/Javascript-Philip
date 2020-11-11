/*
function resolve(val){
  newPromise.state = 'resolved';
  newPromise.result = val;
}
*/
/*
function newPromiseCallback(resolve, reject){
  resolve('hello promise');
}
let newPromise = new Promise(newPromiseCallback);
console.log(newPromise.result);
function newPromiseResolved(result){
  console.log(result);
}
function newPromiseError(error){
  console.log(error);
}
newPromise.catch(newPromiseResolved, newPromiseError);
newPromise.finally();*/

// let promise = new Promise(function (resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert('runs after 3 seconds'));

// function selfResolve(val) {
//   newPromise.state = 'resolved';
//   newPromise.result = val;
// }
//
// function selfRejected(error) {
//   newPromise.state = 'rejected';
//   newPromise.result = error;
// }
//
// function SelfPromise(callback) {
//   callback(selfResolve, selfRejected)
// }

// function newPromiseCallback(resolve, reject) {
//   setTimeout(function () {
//     resolve('Hello Promise');
//     // reject(new Error('Hello Error'));
//   }, 2000);
// }

// let newPromise = new Promise(newPromiseCallback);

// console.log(newPromise);

// function newPromiseResolved(result) {
//   console.log(result);
// }

// function newPromiseError(error) {
//   console.log(error);
// }

// function newPromiseDone() {
//   console.log("I'm done");
// }

// // newPromise.then(newPromiseResolved);
// // newPromise.catch(newPromiseError);
// // newPromise.finally(newPromiseDone).then(newPromiseResolved, newPromiseError);

// setTimeout(function () {
//   newPromise.finally(newPromiseDone);
// }, 5000);

// function loadScriptPr(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }

// loadScriptPr('/article/promise-chaining/one.js')
//   .then(function (script) {
//     return loadScriptPr('/article/promise-chaining/two.js');
//   })
//   .then(function (script) {
//     return loadScriptPr('/article/promise-chaining/three.js');
//   })
//   .then(function (script) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     // one();
//     // two();
//     // three();
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// }

// loadScript('1.js', function (error, script) {
//   if (error) {
//     // handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', function (error, script) {
//       if (error) {
//         // handleError(error);
//       } else {
//         // ...
//         loadScript('3.js', function (error, script) {
//           if (error) {
//             // handleError(error);
//           } else {
//             // ...continue after all scripts are loaded (*)
//           }
//         });
//       }
//     });
//   }
// });

let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve('Succes');
  }
  else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('This is in the then ' + message);
}).catch((message) => {
  console.log('This is in the then ' + message);
});

