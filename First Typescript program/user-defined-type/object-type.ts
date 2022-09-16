// let user : object;
let user : {userName : string, userId? : number}; // ? = for optional property
user = {
    userName : 'rohan-mostafa',
    userId : 10257896
} 

console.log(user);

let users : object[];
users = [
    {
        userName : 'rohan-mostafa',
        userId : 10257896
    },

    {
        userName : 'abdullah',
        userId : 10257897
    }
]

users.push(user);
console.log(users);

for (const key in users) {
    console.log(users[key]);
}

