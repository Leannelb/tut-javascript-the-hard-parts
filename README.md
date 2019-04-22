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


### Principles Review



## Functional Programming




## Callbacks and Higher Order Functions


## Closure


## Asynchronous JavaScript


## Object-Oriented JavaScript


## Wrapping Up
