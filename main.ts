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
let func = function(){
    console.log('This is Anonymous Function');
}
func();

// * Arrow Functions 
let arrowFunc = () => 'This is Arrow Function';
console.log(arrowFunc());











