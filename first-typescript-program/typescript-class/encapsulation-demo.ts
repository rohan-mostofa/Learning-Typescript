// public, private, protected, readonly

class User{

    // by default public
    public userName : string;
    protected age : number;

    constructor(userName : string, age : number){

        this.userName = userName;
        this.age = age;

    }

    display(): void{
        console.log('hi');
        
    };

}


class Student extends User{

    private studentId : number;

    constructor(userName : string, age : number, studentId : number){
        super(userName, age);
        this.studentId = studentId;
    }
    
    display(): void {
        console.log(`Username = ${this.userName}, Age = ${this.age} & Student ID = ${this.studentId}`);
    }

    setStudentId(id : number){
        this.studentId = id;
    }

    getStudentId(){
        return this.studentId;
    }

}

let StudentClass = new Student('abdullah', 20, 12548796);
StudentClass.setStudentId(125488698);
StudentClass.display();
console.log(StudentClass.getStudentId());


let UserOne = new User('rohan-mostafa', 20);
UserOne.display();
// access modifie
UserOne.userName = 'rohan-mostofa';
console.log(UserOne);




