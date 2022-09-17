class User{

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


class Student extends User{

    studentId : number;

    constructor(userName : string, age : number, studentId : number){
        super(userName, age);
        this.studentId = studentId;
    }
    
    displayTwo(): void {
        console.log(`Username = ${this.userName}, Age = ${this.age} & Student ID = ${this.studentId}`);
    }

}

let StudentClass = new Student('abdullah', 20, 12548796);
StudentClass.displayTwo();

let UserOne = new User('rohan-mostafa', 20);
UserOne.display();




