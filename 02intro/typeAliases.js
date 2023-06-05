"use strict";
// type aliases
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: false });
var myUser = {
    _id: 123,
    name: "ro",
    email: "r@r",
    isActive: false,
};
myUser.email = "grdd@roh";
