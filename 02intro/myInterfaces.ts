interface User {
    readonly _dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string): number
}

// reopening of interface
interface User {
    githubToken: number,
}


interface Admin extends User {
    role: "role" | "student" | "teacher",
}


const rohit: Admin = {
    _dbId: 1, email: 'r@r', userId: 123, githubToken: 23312434324, role: "student",

    startTrial: () => {
        return "Hello"
    },

    getCoupon(name: "Rohit") {
        return name.length;
    },
};










export { }