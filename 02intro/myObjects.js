"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Rohit",
    age: 34,
    email: "r@r.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: 'rohit', isActive: false });
var newUser = {
    name: "rr",
    isActive: true,
    email: 'r@R'
};
// this should give error as email is not given as parameter in function.
createUser(newUser);
function createCourse() {
    return {
        name1: "Rohit",
        price1: 293
    };
}
