const getForm = document.querySelector('form') as HTMLFormElement;
const getFormWithClass = document.querySelector('.userForm') as HTMLFormElement;

console.log(getForm);

const username = document.querySelector('#name') as HTMLInputElement;
const email = document.querySelector('#name') as HTMLInputElement;

console.log(username);

getForm.addEventListener('submit', (event : Event) => {
    event.preventDefault();
    const data = {
        username : username.value,
        email : email.value
    }
    console.log(data);
    
});

let userInfo : () => void;
let userInfoTwo : (name : string) => void;

userInfo = () => {
    console.log('My name is Rohan Mostofa.');
}

userInfo();

userInfoTwo = (name : string) => {
    console.log(`My name is ${name}.`);
}

userInfoTwo('Rohan Mostafa');

// interface as types

interface IUser {
    id : number,
    name : string,
    age : number
}

let users : IUser[] = [];

let userOne : IUser = {
    id : 12548965,
    name : 'Rohan Mostofa',
    age : 20
}

let userTwo : IUser = {
    id : 12548966,
    name : 'SM Abdullah',
    age : 21
}

users.push(userOne);
users.push(userTwo);

console.log(users);

const printUserInfo = (user : IUser) => {
    console.log(`User ID : ${user.id}, User Name : ${user.name} & User Age : ${user.age}`);
}

users.forEach((user) => printUserInfo(user));


// class implementing interface

interface IFormatUser {
    formatUser : () => string
}

class User implements IFormatUser{
    // fullName : string;
    // age : number;

    constructor(private name : string, private age : number){
        // this.fullName = name;
        // this.age = age;
    }

    formatUser(){
        return `Name : ${this.name} & Age : ${this.age}`
    }
}

let userLeaderFunc = new User('Rohan', 20);
console.log(userLeaderFunc);
console.log(userLeaderFunc.formatUser());


