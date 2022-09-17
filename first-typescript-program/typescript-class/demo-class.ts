class User{

    // properties, methods, constructor

    userName : string;
    age : number;

    constructor(userName : string, age : number){

        this.userName = userName;
        this.age = age;

    }

    display(): void {
        console.log(`Username = ${this.userName} & Age = ${this.age}`);
    }

}


let UserOne = new User('rohan-mostafa', 20);
UserOne.display();

