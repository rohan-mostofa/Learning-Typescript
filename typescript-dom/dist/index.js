"use strict";
const getForm = document.querySelector('form');
const getFormWithClass = document.querySelector('.userForm');
console.log(getForm);
const username = document.querySelector('#name');
const email = document.querySelector('#name');
console.log(username);
getForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        username: username.value,
        email: email.value
    };
    console.log(data);
});
let userInfo;
let userInfoTwo;
userInfo = () => {
    console.log('My name is Rohan Mostofa.');
};
userInfo();
userInfoTwo = (name) => {
    console.log(`My name is ${name}.`);
};
userInfoTwo('Rohan Mostafa');
let users = [];
let userOne = {
    id: 12548965,
    name: 'Rohan Mostofa',
    age: 20
};
let userTwo = {
    id: 12548966,
    name: 'SM Abdullah',
    age: 21
};
users.push(userOne);
users.push(userTwo);
console.log(users);
const printUserInfo = (user) => {
    console.log(`User ID : ${user.id}, User Name : ${user.name} & User Age : ${user.age}`);
};
users.forEach((user) => printUserInfo(user));
class User {
    // fullName : string;
    // age : number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.fullName = name;
        // this.age = age;
    }
    formatUser() {
        return `Name : ${this.name} & Age : ${this.age}`;
    }
}
let userLeaderFunc = new User('Rohan', 20);
console.log(userLeaderFunc);
console.log(userLeaderFunc.formatUser());
