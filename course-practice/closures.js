/*
function instructionGenerator (num) {
  let inputsArray = [];
  function mulitplyByNum (input) {
    inputsArray.push(input);
    console.log(inputsArray);
    return input * num;
  }
  return mulitplyByNum;
}

let generatedFunc = instructionGenerator(3);
*/

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
  function printHello () {
    console.log('hello!');
  }
  return printHello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();



function createFunctionPrinter(input) {
  function returnInput () {
    console.log(input);
  }
  return returnInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

// Challenge 4

function addByX(x) {
  function addValue(y) {
    // console.log(x + y);
    return x + y;
  }
  return addValue;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
addByTwo(1);

// now call addByTwo with an input of 2
addByTwo(2);


//--------------------------------------------------
// Challenge 5: Extension
//--------------------------------------------------

function once(func) {
  let called = false;
  function innerFunc() {
    if (!called) {
      called = true;
      func();
    }
  }
  return innerFunc;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


function after(count, func) {

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait) {

}
