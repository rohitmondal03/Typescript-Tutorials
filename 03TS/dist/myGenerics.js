"use strict";
const score = [];
const names = [];
function IdentityOne(val) {
    return val;
}
function IdentityTwo(val) {
    return val;
}
function IdentityThree(val) {
    return val;
}
// IdentityThree("hitesh");
function IdentityFour(val) {
    return val;
}
IdentityFour({ brand: "", type: 1 });
function getSearchProducts(products) {
    // do some DB operations
    const myIndex = 3;
    return products[myIndex];
}
const getSearchProductsArrow = (products) => {
    return products[3];
};
