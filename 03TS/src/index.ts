// class User {
//     public email: string
//     name: string
//     private readonly city: string

//     constructor(email: string, name: string, city: string) {
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }


// const rohit = new User("r@r", "rohit", "raipur");
// rohit.city





class User {
    readonly city: string = "Raipur";

    protected _courseCount = 1;

    constructor(
        public email: string,
        public name: string,
        // private uid: number,
    ) { }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        // SETTERS DON'T HAVE ANY RETURN TYPES
        if (courseNum < 3) {
            throw new Error("Course count be morethan 1")
        }

        this._courseCount = courseNum;
    }

    private deleteToken() {
        console.log('Token deleted');
    }

}


class SubUser extends User {
    isFamilty: boolean = true;

    changeCourseCount() {
        this._courseCount = 4;
    }
}


const rohit = new User("r@r", "rohit");