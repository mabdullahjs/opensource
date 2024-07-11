// Introduction To Typescript
// Typescript is a superset of Javascript 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Variables (var, let , const)
// There are 3 Types Of Variables var let and const
var name1 = "Umar"; // Type Annotations or Explicit Type
var name2 = "Ali"; // implicit Type 
// Basic Opearators 
// * Arithmetic Operators + - * / % **
// * Assignment Operators = += -= *= /=
// * Uranary Opearators ++ -- 
// * Comparison Opearators == === > < >= <=
// * Logical Opearators && ||
// * Ternary Opearators Shprt Hand Of If Else ? :
// * Spread Opearator ... 
// Examples 
var a = 5;
var b = 10;
console.log(a + b); // Arithematic
a += 3; // Assignment 
console.log(a);
b++; // Uranary
console.log(b);
console.log(a === b); // Comparison
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true); // Spread
console.log(arr3);
// 4) If Else 
if (arr1.includes(1)) {
    console.log(true);
}
else {
    console.log(false);
}
// 5) Arrays => Collection of Data
var names = ['Umar', 'Ali', 'Hamza'];
console.log(names);
// Loops
// For
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
// For Of 
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var val = names_1[_i];
    console.log(val); // Print All Names
}
// for in
for (var val in names) {
    console.log(val); // Prints All Index Number in The names Array
}
// Functions 
// Returns
function greet() {
    return 'Hello World';
}
console.log(greet());
// Parameters And Arguments 
function myName(name1 /* Paramerter */) {
    console.log("My Name is ".concat(name1));
}
myName('Umar' /* Argument */);
// Optional Parameters
function add(a, b, c /* opt Paramerter*/) {
    if (c) {
        console.log(a + b + c);
    }
    else {
        console.log(a + b);
    }
}
add(5, 10); // 15
// * Default Parameters 
function subtract(a, b /* def Paramerter*/) {
    if (b === void 0) { b = 2; }
    console.log(a - b);
}
subtract(7); // 5
// * Rest Parameters 
function rest() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest); // returns The Array
}
rest(1, 2, 3, 4, 5, 6);
// * Anonymous Functions 
// It Has No Name
var func = function () {
    console.log('This is Anonymous Function');
};
func();
// * Arrow Functions 
var arrowFunc = function () { return 'This is Arrow Function'; };
console.log(arrowFunc());
