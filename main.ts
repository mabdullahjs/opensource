// Introduction To Typescript
// Typescript is a superset of Javascript 

// Variables (var, let , const)
// There are 3 Types Of Variables var let and const

let name1: string = "Umar"; // Type Annotations or Explicit Type
let name2 = "Ali"; // implicit Type 

// Basic Opearators 
// * Arithmetic Operators + - * / % **
// * Assignment Operators = += -= *= /=
// * Uranary Opearators ++ -- 
// * Comparison Opearators == === > < >= <=
// * Logical Opearators && ||
// * Ternary Opearators Shprt Hand Of If Else ? :
// * Spread Opearator ... 

// Examples 

let a: number = 5;
let b: number = 10;
console.log(a + b); // Arithematic
a += 3; // Assignment 
console.log(a);
b++; // Uranary
console.log(b);
console.log(a === b); // Comparison

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let arr3: number[] = [...arr1, ...arr2]; // Spread
console.log(arr3);

// 4) If Else 

if (arr1.includes(1)) {
    console.log(true);
} else {
    console.log(false);
}

// 5) Arrays => Collection of Data
let names: string[] = ['Umar', 'Ali', 'Hamza'];
console.log(names);
// Loops
// For
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}
// For Of 
for (let val of names) {
    console.log(val); // Print All Names
}
// for in
for (let val in names) {
    console.log(val); // Prints All Index Number in The names Array
}

// Functions 

// Returns
function greet() {
    return 'Hello World'
}
console.log(greet());

// Parameters And Arguments 
function myName(name1: string /* Paramerter */) {
    console.log(`My Name is ${name1}`);
}
myName('Umar' /* Argument */);

// Optional Parameters
function add(a: number, b: number, c?: number/* opt Paramerter*/) {
    if (c) {
        console.log(a + b + c);
    } else {
        console.log(a + b);
    }
}
add(5, 10); // 15

// * Default Parameters 
function subtract(a: number, b: number = 2 /* def Paramerter*/) {
    console.log(a - b);
}
subtract(7); // 5

// * Rest Parameters 
function rest(...rest: number[]) {
    console.log(rest); // returns The Array
}
rest(1, 2, 3, 4, 5, 6);

// * Anonymous Functions 
// It Has No Name
let func = function () {
    console.log('This is Anonymous Function');
}
func();

// * Arrow Functions 
let arrowFunc = () => 'This is Arrow Function';
console.log(arrowFunc());

// Nested Functions

function hello() {
    console.log('Hello World');
}
function printHello() {
    hello();
}
printHello();

// * Recursive Functions 
function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120

// * IIFE Concept 
// Immediately Invoked Function Expression
(function () {
    console.log('IIFE Calling');
})()

// Objects 
let obj = {
    name: 'umar',
    age: 16,
}
console.log(obj.name);
console.log(obj['age']);

// Type Aliases

// Anonymous Type 
let myobj: {
    name: string,
    id: number,
    isStudent: boolean
} = {
    name: "Umar Farooq",
    id: 123,
    isStudent: true
}

// Seperate Type we can use Keyword Type or Interfaces
type User = {
    userName: string,
    password: number
}

let user: User = {
    userName: "HamzaAliKhan112",
    password: 1234,
}
console.log(user.userName, user.password);

// Type Litrals 
type Num = "One" | "Two" | "Three";
let num: Num = "One";// We dont Assign Anything Exept One Two Three
console.log(num);

// Union Types

let dontKnow: string | number = "Anoosha";
console.log(dontKnow);

// Type Intersection

interface Rectangle {
    width: number;
    height: number;
}

interface Colorful {
    color: string;
}

type ColoredRectangle = Rectangle & Colorful; // Intersection

const rect: ColoredRectangle = {
    width: 100,
    height: 200,
    color: 'red'
};

console.log(rect.width); // 100
console.log(rect.height); // 200
console.log(rect.color); // "red"

// 9) Enums 
enum Direction {
    Left,
    Right,
    Top,
    Bottom
}
console.log(Direction.Left); // 0

// 10) Tuples
let arr: [number, number, number] = [1, 2, 3];
console.log(arr);

// 12) Hoisting 
hoisting();
function hoisting() {
    console.log('Function Calls First This is Hoisting');
}

// 16) Asynchronous Programming 
// Callback 

function callBack(callBack: () => void) {
    callBack();
}

function print() {
    console.log('This is Callback Function');
}

callBack(print); // Print is a callback Function

// Promisses 

// function prom() {
//     return new Promise((resolve) => {
//         resolve("Success");
//     })
// }
// prom().then(res => {
//     console.log(res);
// });

// Async Await 

// function asyncAwait() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('This is Async Function');
//         }, 2000)
//     })
// }
// (async function () {
//     await asyncAwait();
// })();

// OOPS

class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal {
    skill: string;
    constructor(name: string, age: number, skill: string) {
        super(name, age)
        this.skill = skill;
    }
    skills() {
        console.log(`${this.name} Skill is ${this.skill}`);
    }
}

let dog = new Dog('Dog', 1, "Barks");
console.log(dog.name);
console.log(dog.age);
console.log(dog.skill);
dog.skills()
