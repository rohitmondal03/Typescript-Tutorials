const user = {
    name: "Rohit",
    age: 34,
    email: "r@r.com",
    isActive: true,
}

function createUser({ name: string, isActive: boolean }) { }

createUser({ name: 'rohit', isActive: false });

let newUser = {
    name: "rr",
    isActive: true,
    email: 'r@R'
}
// this should give error as email is not given as parameter in function.
createUser(newUser);



function createCourse(): { name1: string, price1: number } {
    return {
        name1: "Rohit",
        price1: 293
    }
}









export { }