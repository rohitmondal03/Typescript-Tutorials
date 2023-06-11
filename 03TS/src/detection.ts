function detectType(val: number | string): string {
    if (typeof val === "string") {
        return val.toLowerCase();
    }

    return "number";
}



function provideId(id: string | null): void {
    if (!id) {
        console.log("provide a id");
        return
    }

    id.toLowerCase();
}




function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}








// `in`

interface User {
    name: string
    email: string
}

interface Admin {
    name: string
    email: string
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }

    return User.name;
}







// `instanceOf`

function logValue(x: Date | string): void {
    if (x instanceof Date) {
        console.log("Date", x.toUTCString());
    }
    else {
        console.log("String");
    }
}




type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
    // will not `return` true but `Fish`
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish food"
    } else {
        pet
        return "Bird food"
    }
}






// discriminated unions

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    side: number;
}

interface Rectangle {
    kind: 'rectangle';
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side ** 2;
}


function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side ** 2;

        case "rectangle":
            return shape.width * shape.length;

        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}