# JavaScript: The Hard Parts
By Will Sentance | Frontend Masters

## JavaScript: The Hard Parts




### Introduction
**5 Things that make a great developer:**
- Analytical problem solving with code
- Technical communication (can I implement your approach just from your explanation)
- Engineering best practices and approach (Debugging, code structure, patience and reference to documentation)
- Non-technical communication (empathetic and thoughtful communication)
- Language and computer science experience

**Expectations**
— Support each other - engineering empathy is the
critical value at Codesmith
— Work hard, Work smart
— Thoughtful communication




## Principles of JavaScript

### Global Execution Context
**What Happens When JavaScript Executes (runs) My Code**
- It starts a thread of execution (parsing and executing the code line after line)
— Live memory of variables with data (known as a Global Variable Environment)
- *The code inside functions is not comitted to memory until that function is called
```js
const num = 3;
function multiplyBy2 (inputNumber){
 const result = inputNumber*2;
 return result;
}
const name = "Will"
```

**The Thread in JavaScript**
- JavaScript is *single threaded* – It does one thing at a time
- JavaScript is synchronous, it executes code one line after another


### Local Execution Context
**Running / Calling / Invoking a Function**
- This is not the same as defining a function
- Calling a function creates a local execution context.
  - This context is comprised of a thread of execution (going through the code line by line)
  - A local memory (variable environemnt) where anything defined in that function is stored
- When the function is finished being called, its local context is erased from memory

```js
const num = 3;
function multiplyBy2 (inputNumber){
 const result = inputNumber*2;
 return result;
}
const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);
```


### Call Stack
**We keep track of the functions being called in JavaScript with a Call stack**
- Call Stack is a Special data structure that tracks where the thread of execution is at the current time – what function is currently being run and where to return to after an execution context is popped off the stack
- There is one global execution context, and multiple function contexts
- Calls are stacked bottom to top, the global is the first thing, then functions are added atop it

**Terminology:**
- Calls are *pushed* to the stack
- Call are *popped* from the stack
- The Default return value of a function is `undefined`
- Local memory is called a variable environment


### Q&A Global Memory and Call Stack
- As your code is read, when it gets to a function it says, store this function definition in the global memory
- Callstack is also in memory and is part of the JavaScript engine
- There can be multiple callstacks for when you're using workers


### Principles Review
- The thread, global memory and execution context are the key principles of JavaScript




## Functional Programming

### Pure Functions
Conceptually, pure functions are about structuring your code so that it can be modified later by other people
- They have no side effects
- They're immutable
- The only consequence of the function is what it returns
- Pure functions don't change anything in the global memory

### Higher Order Functions
This refers to leaving some functionality to be determined later. We may not want to decide exactly what our functionality is until we run our function

**Prompt:** Create a function 10 squared, that returns 10*10
```js
function tenSquared () {
  return 10 * 10;
}
```
This function is not *DRY*. It's not reusable.

**Better Function:**
```js
function squareNum (num) {
  return num * num;
}
```

**Best Function:**
```js
function mathNum (num, operation) {
  return operation(num);
}
```




## Callbacks and Higher Order Functions

### Introducing Pair Programming
- You come up with a problem-solving approach, you have someone else do it
- The key is talking through code, which will force you to understand it and try difficult things
- Let the errors happen


### Callbacks and Higher-Order Functions Exercises
[Callbacks Exercise](http://csbin.io/callbacks)


### Parameterizing Functions
**Below is a regular function**
```js
function copyArrayAndMultiplyBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1,2,3]

let result = copyArrayAndMultiplyBy2(myArray)
```


### Q&A: Const and Let
- Use const for everything unless you know you're going to change it


### Generalizing Functions
**Another Regular Function**
Notice that really nothing changes here
```js
function copyArrayAndDivideBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] /2);
  }
  return output;
}

const myArray = [1,2,3]
let result = copyArrayAndDivideBy2(myArray);
```


### Reviewing Generalizing Function
- Doing functions like the ones above are breaking the DRY principle

**Another One**
```js
function copyArrayAndAdd3(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] +3);
  }
  return output;
}

const myArray = [1,2,3]

let result = copyArrayAndAdd3(myArray);
```

#### A Better Solution!
**Generalized Function**
- This function is a flexible way of taking an array and performing an operation on it
- generalize our function so that we pass in our specific instruction only when we run the copyArrayAndManipulate function!
```js
function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```


### Deconstructing Generalize Function
```js
// Store this function declaration in the global memory
function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
// Store this function declaration in the global memory
function multiplyBy2(input) {
  return input * 2;
}
// Store the label "result" and run this function to get its value
let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// Now the global context stops executing and we start running the copy and manipulate function in its own execution context
// Store Variables in copyArrayAndManipulate's local memory
```


### Q&A: Passing Functions
- Nothing important here

### First-Class Objects
- Functions are treated like objects so they can be passed into other functions
- Returning a function as a value of another function is called closure


### Callback VS Higher Order Functions
Takes in a function or passes out a function - Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently
```js
// Higher order function
function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
// Callback
function multiplyBy2(input) {
  return input * 2;
}
let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```
- So callbacks and higher order functions simplify our code and keep it DRY
- They allow us to run asynchronous code

## Closure

### Introducing Closure
- What if we could keep data/state between function executions?
- It starts with returning a function from another function

### Deconstructing Example
How do we call `muliplyBy2` now?
```js
function instructionGenerator() {
  function multiplyBy2 (num){
    return num*2;
  }
  return multiplyBy2;
}
let generatedFunc = instructionGenerator()
let result = generatedFunc(3) //6
```


### Q&A + Pair Programming
[Closure Exercises](http://csbin.io/closures)


### Closure Exercise, Part 1
- Where you define your functions determines what variables your function have access to when you call the function
- Increment counter looks for the counter variable and finds it in outer
```js
function outer (){
  let counter = 0;
  function incrementCounter (){
    counter ++;
  }
  incrementCounter();
}

outer();
```
- The following won't work because `incrementCounter()` is defined in `outer`, but not global memory
```js
function outer (){
  let counter = 0;
  function incrementCounter (){
    counter ++;
  }
}
outer()
incrementCounter();
```

### Closure Exercise, Part 2
- This is how we call a function outside the scope under which it was defined
```js
function outer () {
  let counter = 0;
  function incrementCounter (){
    counter ++;
  }
  return incrementCounter;
}
var myNewFunction = outer(); // myNewFunction = incrementCounter

myNewFunction();
```

### Closure Exercise, Part 3
- Defining `outer` with a function inside it created a special bond between itself and the function inside it
- This is how we have access to `counter`
```js
function outer () {
  let counter = 0;
  function incrementCounter (){
    counter ++;
  }
  return incrementCounter;
}
var myNewFunction = outer(); // myNewFunction = incrementCounter

myNewFunction();
```


### Q&A Lexical Scope
- Closure / Lexical Scope Reference is the official name of the bond between `outer` and `incrementCounter`
- This data can only be accessed when calling `incrementCounter`
- The position of a function definition, not where it is called, defines the scope of what it has access to


### Q&A Garbage Collection
- Nothing

### Closure Exercise, Part 4
- Declaring `outer` in `myNewFunction` and `anotherFunction` calls it independently and ties it to each variable so they can update independently of one another
```js
function outer (){
  let counter = 0;
  function incrementCounter (){
    counter ++;
  }
  return incrementCounter;
}

let myNewFunction = outer();
myNewFunction();
myNewFunction();

let anotherFunction = outer(); // myNewFunction = incrementCounter
anotherFunction();
anotherFunction();
```


### Q&A Shared References
-

### Power of Closure
- Now: Our functions get 'memories' - once, memoize
- Advanced: We can implement the module pattern in JavaScript





## Asynchronous JavaScript

### Introducing Asynchronous JavaScript
- Async JavaScript allows JS to run while API calls and such are made
```js
function printHello() {
  console.log("Hello");
}

setTimeout(printHello,1000);
console.log("Me first!");
```
- These timeouts will run *after* our following calls
```js
function printHello(){
  console.log("Hello");
}
setTimeout(printHello,0);
console.log("Me first!");
```

**Platform Components**
- Thread of Execution
- Memory / Variable Environment
- Call Stack
- Web Browser API / Node Background Threads
- Callback / Message Queue
- Event Loop


### Browser API
- First, we create our execution context
- We declare our `printHello` function and store it in global memory with that label
- `setTimeout` taps into our Browser API and spins up a timer
```js
function printHello(){
  console.log("Hello");
}
setTimeout(printHello,0);
console.log("Me first!");
```


### Browser API Q&A


### Resetting Pair Programming
[Asynchronous Questions](https://jsbin.com/hijijag/1/edit?js,console,output)
[Asynchronous Answers](https://github.com/FrontendMasters/fm-snippets/blob/master/2018-01-22-javascript-hard-parts/fem-JavaScriptTheHardParts-AsynchronicitySolutions.js)


### Browser API Q&A Part II


### Callback Queue
- Declare `printHello`
- Delcare `blockFor1Sec`
- We set a timeout on print hello, it will print at the end of the execution sequence
- The Callback Queue adds the timeout to the call stack when the global context is done running and the call stack is empty
-
```js
function printHello(){
console.log("Hello");
}
function blockFor1Sec(){
//blocks in the JavaScript thread for 1 second
}
setTimeout(printHello,0);
blockFor1Sec()
console.log("Me first!");
```


### Callback Queue & Event Loop
- Hold each deferred function in a queue (the Callback Queue) when the API ‘completes’
- Add the function to the Call stack (i.e. execute the function) ONLY when the call stack is totally empty (Have the Event Loop check this condition)


### Asynchronous Q&A and Pair Programming
- You can't override when the `timeout` runs, it will always happen after everything else has completed

### Introducing More Browser APIs
Things that the browser has API's for:
- A timer to finish running
- New information from a server (Ajax)
- Indication that a portion of the page has loaded
- User interaction (clicks, mouseovers, drags)
- Writing/Reading to File system (Node)
- Writing/reading database (Node)


### XMLHttpRequest
- AJAX requests go off and do their thing while the rest of the JavaScript executes
```js
function display(data){
  console.log(data.post);
}
$.get("http://twitter.com/willsen/tweet/1", display);
console.log(“Me first!”);
```


### XMLHttpRequest Q&A
- Global never goes away


### XMLHttpRequest Correction
- It's XML and XHR


## Object-Oriented JavaScript


## Wrapping Up
