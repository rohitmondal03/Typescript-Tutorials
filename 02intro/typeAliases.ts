// type aliases

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: false });





// readonly

type Users= {
    readonly _id: number;
    name: string;
    email: string;
    isActive: boolean;
    cardDetails?: number;  // `?` stands for optional
}

let myUser: Users= {
    _id: 123,
    name: "ro",
    email: "r@r",
    isActive: false,
}

myUser.email= "grdd@roh";



type cardNumber= {
    cardNumber: string;
}

type cardDate= {
    cardDate: string;
}

// type cardDetails= {
//     cardNumber: cardNumber;
//     cardDate: cardDate;
// }

type cardDetails = cardDate & cardNumber & {
    cvv: number;
}





export { };