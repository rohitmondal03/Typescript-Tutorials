function addTwo(num: number): number {
    return num + 2;
    // return 'hello';
}

addTwo(3);


function getUpper(str: string) {
    return str.toUpperCase();
}

getUpper("Rohit");



function signUp(email: string, password: number, name: string, isPaid: boolean = true) { }

signUp("rohit@", 123, "Rohit");



function loginUser(name: string, email: string, isLogged: boolean = false) { }
// default value is given to `isLogged`

loginUser("Rohit", "r@r");



function getVal(myVal: number): boolean | number {
    if (myVal > 5) {
        return true;
    }
    return 3;
}


const getHello = (s: string): string => {
    return "Hello";
}


const heroes = ["thor", 'spiderman', 'ironman'];

heroes.map((hero): string => {
    return `Hero is ${hero}`;
})


function consoleError(err: string): void {
    console.log(err);
}


function handleError(err: string): never {
    // never is used when there is some unreachable statement, but void is used when we don't return a value.
    throw new Error(err);
}






export { };