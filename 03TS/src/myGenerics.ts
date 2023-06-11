const score: Array<number> = [];
const names: Array<string> = [];

function IdentityOne(val: number | boolean): number | boolean {
    return val;
}

function IdentityTwo(val: any): any {
    return val;
}

function IdentityThree<Type>(val: Type): Type {
    return val;
}
// IdentityThree("hitesh");


function IdentityFour<T>(val: T): T {
    return val;
}



interface Bottle {
    brand: string,
    type: number,
}
IdentityFour<Bottle>({ brand: "", type: 1 })





function getSearchProducts<T>(products: T[]): T {
    // do some DB operations
    const myIndex = 3;
    return products[myIndex];
}

const getSearchProductsArrow = <T,>(products: T[]): T => {
    return products[3];
}











interface Database {
    connection: string;
    username: string;
    password: string;
}



function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    }
}

// anotherFunction(3, {});


interface Quiz {
    name: string;
    type: string;
}

interface course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[]= [];

    addtoCart(products: T){
        this.cart.push(products);
    }
}