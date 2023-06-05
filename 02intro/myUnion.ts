let score: number | string | boolean = 33;
score = 33;
score = "55";





type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    phn: number;
}

let Hitesh: User | Admin = { name: '', id: 22 };
Hitesh = { username: '', phn: 7755 };





function getDBId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    } else {
        id + 2;
    }
}

getDBId(3);





// array

// const data1: number[]= [1, 2, 3, '4']
// const data2: string[]= [1, 2, 3, '4']

const data3: string[] | number[] = [`1`, `2`, `3`, '4']
// `data3` can have all elements as string or all elements as number. 

const data4: (number | string | boolean)[] = [1, 2, '3', 4, '5', true];
// `data4` can have elements either string or number.




export { }