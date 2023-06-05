"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return 'hello';
}
addTwo(3);
function getUpper(str) {
    return str.toUpperCase();
}
getUpper("Rohit");
function signUp(email, password, name, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
signUp("rohit@", 123, "Rohit");
function loginUser(name, email, isLogged) {
    if (isLogged === void 0) { isLogged = false; }
}
// default value is given to `isLogged`
loginUser("Rohit", "r@r");
function getVal(myVal) {
    if (myVal > 5) {
        return true;
    }
    return 3;
}
var getHello = function (s) {
    return "Hello";
};
var heroes = ["thor", 'spiderman', 'ironman'];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(err) {
    console.log(err);
}
function handleError(err) {
    // never is used when there is some unreachable statement, but void is used when we don't return a value.
    throw new Error(err);
}
