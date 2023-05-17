import doSomething from "./doSomething.js";
import { squareValue, halfOf, yourName } from "./lib.js";

console.log(squareValue(11));
console.log(halfOf(10));
doSomething();
console.log(yourName);

//let - It will allow you to change the value after initialization.
//const - It won't allow you to change the value after initialization.
let myName = "krunal";
console.log(myName);
myName = "Leonardo";
console.log(myName);