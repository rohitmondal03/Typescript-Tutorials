"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city: string
//     constructor(email: string, name: string, city: string) {
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }
// const rohit = new User("r@r", "rohit", "raipur");
// rohit.city
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Raipur";
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        // SETTERS DON'T HAVE ANY RETURN TYPES
        if (courseNum < 3) {
            throw new Error("Course count be morethan 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log('Token deleted');
    }
}
const rohit = new User("r@r", "rohit");
