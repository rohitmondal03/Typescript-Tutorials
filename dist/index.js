"use strict";
// TYPESCRIPT FILE
var _a;
// let age: number= 10;
// if(age < 20) 
//     age += 10;
let sales = 123456789;
// let sales= 123_456_789
let course = 'Typescript';
let is_published = false;
let level; // type `any`
function render(document) {
    // either specifying `any` , we can also head to `tsconfig.json` file and and turn on `noImplicitAny` to false;
    console.log(document);
}
// ARRAYS
let numbers = [1, 2, 3];
let arr = [];
arr[0] = 1;
// arr[1]= 'ang'   :/error
arr[1] = 23;
// numbers.forEach(n => n.)
// TUPLES
let user = [1, 'Rohit', 0];
user.push(3);
let mySize = 2 /* Size.Medium */;
console.log(mySize);
// FUNCTIONS
// function calCalculateTax(income: number, taxYear?: number): number {
// but the above code, not good as because `if` statement the `taxYear` will raise a warning...
function calCalculateTax(income, taxYear = 2020) {
    // return 33
    // let x;
    if (taxYear < 2021)
        return income * 10;
    return income * 3;
}
calCalculateTax(1000000, 2022);
// OBJECTS
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
const emp = {
    id: 1,
    name: "Rohit",
    retire: (date) => {
        console.log(date);
    },
};
// UNION TYPES
function kbToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let WidgetBox = {
    drag: () => { },
    resize: () => { }
};
// LITERAL TYPES- limiting the values
let comp;
let quan = 50;
// NULLABLE TYPES
function greet(name) {
    if (name)
        // will be executed if a name is given
        console.log("Hello" + name.toUpperCase());
    else
        // will be executed if null is given
        console.log('Hola !');
}
greet(null);
function getCustomer(id) {
    return id == 0 ? null : { bday: new Date() };
}
let cust = getCustomer(1);
// if(cust !== null && cust !== undefined) {
//     console.log(cust.bday); 
// }
//
console.log((_a = cust === null || cust === void 0 ? void 0 : cust.bday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map