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



## Closure


## Asynchronous JavaScript


## Object-Oriented JavaScript


## Wrapping Up
