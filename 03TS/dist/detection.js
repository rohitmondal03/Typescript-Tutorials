"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return "number";
}
function provideId(id) {
    if (!id) {
        console.log("provide a id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return User.name;
}
// `instanceOf`
function logValue(x) {
    if (x instanceof Date) {
        console.log("Date", x.toUTCString());
    }
    else {
        console.log("String");
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
    // will not `return` true but `Fish`
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.length;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
