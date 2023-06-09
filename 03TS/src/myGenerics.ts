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