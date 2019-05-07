// function userCreator(name, score) {
//   let newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function() {
//     newUser.score++;
//   };
//   return newUser;
// };

// let user1 = userCreator("Will", 3);
// let user2 = userCreator("Tim", 5);
// user1.increment();
// user2.increment();
// console.log(user1);\

/*
function userCreator (name, score) {
  let newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

let userFunctionStore = {
  increment: function(){this.score++;},
  // eslint-disable-next-line no-console
  login: function(){console.log('You\'re loggedin');}
};

let user1 = userCreator('Will', 3);
// eslint-disable-next-line no-unused-vars
let user2 = userCreator('Tim', 5);
user1.increment();
// eslint-disable-next-line no-debugger
debugger;
*/
/*
function userCreator (name, score) {
  let newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

let userFunctionStore = {
  increment: function(){this.score++;},
  // eslint-disable-next-line no-console
  login: function(){console.log('You\'re loggedin');}
};

let user1 = new userCreator('Will', 3);
let user2 = userCreator('Tim', 7);

console.log(user1);
console.log(user2);
console.log(userCreator);
*/
function User(name, score){
  this.name = name;
  this.score = score;
}

User.prototype.increment = function(){
  this.score++;
};

User.prototype.login = function(){
  console.log("login");
};

let user1 = new User('Eva', 9)
user1.increment();
debugger;
