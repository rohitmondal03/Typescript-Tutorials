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
    let x;
    if(taxYear < 2021)
        return income*10;
    
    return income*3;
}

calCalculateTax(1000000, 2022)

