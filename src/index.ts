// TYPESCRIPT FILE

// let age: number= 10;

// if(age < 20) 
//     age += 10;

let sales: number = 123_456_789
// let sales= 123_456_789
let course: string = 'Typescript'
let is_published: boolean = false

let level;  // type `any`



function render(document: any) {
    // either specifying `any` , we can also head to `tsconfig.json` file and and turn on `noImplicitAny` to false;
    console.log(document);
}



// ARRAYS

let numbers: number[] = [1, 2, 3]

let arr: number[] = []
arr[0] = 1
// arr[1]= 'ang'   :/error
arr[1] = 23

// numbers.forEach(n => n.)





// TUPLES

let user: [number, string, number] = [1, 'Rohit', 0]
user.push(3);
// ambiguity

// console.log(user);






// ENUMS 

const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize);




// FUNCTIONS

// function calCalculateTax(income: number, taxYear?: number): number {
// but the above code, not good as because `if` statement the `taxYear` will raise a warning...
function calCalculateTax(income: number, taxYear = 2020): number {
    // return 33
    // let x;
    if (taxYear < 2021)
        return income * 10;

    return income * 3;
}

calCalculateTax(1000000, 2022)





// OBJECTS


let employee: {
    name: string,
    // name?: string, 
    readonly id: number,
    retire: (date: Date) => void
} = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};





// TYPE ALIASAS

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

const emp: Employee = {
    id: 1,
    name: "Rohit",
    retire: (date: Date) => {
        console.log(date);
    },
}





// UNION TYPES

function kbToLbs(weight: number | string) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}







// INTERSECTION TYPES

// let wt: number & string;

type Draggable = {
    drag: () => void,
}

type Resize = {
    resize: () => void,
}

type UIWidget = Draggable & Resize;


let WidgetBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}






// LITERAL TYPES- limiting the values

let comp: 50 | 100;

type quantity = 50 | 100;
let quan: quantity = 50;

type Metric = 'cm' | 'mt';






// NULLABLE TYPES

function greet(name: string | null | undefined) {
    if (name)
        // will be executed if a name is given
        console.log("Hello" + name.toUpperCase());
    else
        // will be executed if null is given
        console.log('Hola !');

}


greet(null);






// OPTIONAL CHAINING

type Customer = {
    bday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id == 0 ? null : { bday: new Date() }
}


let cust = getCustomer(1);

// if(cust !== null && cust !== undefined) {
//     console.log(cust.bday); 
// }

//
console.log(cust?.bday?.getFullYear());






// OPTIONAL ELEMENT ACCESS OPERATOR

// In array
// customer?.[0]






// OPTIONAL CALL

// let log: any= (message: string) => console.log(message);

let log: any = null;
log?.('a') 


