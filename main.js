"use strict";
// Introduction To Typescript
// Typescript is a superset of Javascript 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// Nested Functions
function hello() {
    console.log('Hello World');
}
function printHello() {
    hello();
}
printHello();
// * Recursive Functions 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120
// * IIFE Concept 
// Immediately Invoked Function Expression
(function () {
    console.log('IIFE Calling');
})();
// Objects 
var obj = {
    name: 'umar',
    age: 16,
};
console.log(obj.name);
console.log(obj['age']);
// Type Aliases
// Anonymous Type 
var myobj = {
    name: "Umar Farooq",
    id: 123,
    isStudent: true
};
var user = {
    userName: "HamzaAliKhan112",
    password: 1234,
};
console.log(user.userName, user.password);
var num = "One"; // We dont Assign Anything Exept One Two Three
console.log(num);
// Union Types
var dontKnow = "Anoosha";
console.log(dontKnow);
var rect = {
    width: 100,
    height: 200,
    color: 'red'
};
console.log(rect.width); // 100
console.log(rect.height); // 200
console.log(rect.color); // "red"
// 9) Enums 
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Top"] = 2] = "Top";
    Direction[Direction["Bottom"] = 3] = "Bottom";
})(Direction || (Direction = {}));
console.log(Direction.Left); // 0
// 10) Tuples
var arr = [1, 2, 3];
console.log(arr);
// 12) Hoisting 
hoisting();
function hoisting() {
    console.log('Function Calls First This is Hoisting');
}
// 16) Asynchronous Programming 
// Callback 
function callBack(callBack) {
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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, skill) {
        var _this = _super.call(this, name, age) || this;
        _this.skill = skill;
        return _this;
    }
    Dog.prototype.skills = function () {
        console.log("".concat(this.name, " Skill is ").concat(this.skill));
    };
    return Dog;
}(Animal));
var dog = new Dog('Dog', 1, "Barks");
console.log(dog.name);
console.log(dog.age);
console.log(dog.skill);
dog.skills();
