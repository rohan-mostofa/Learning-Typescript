// let user : object;
var user; // ? = for optional property
user = {
    userName: 'rohan-mostafa',
    userId: 10257896
};
console.log(user);
var users;
users = [
    {
        userName: 'rohan-mostafa',
        userId: 10257896
    },
    {
        userName: 'abdullah',
        userId: 10257897
    }
];
users.push(user);
console.log(users);
for (var key in users) {
    console.log(users[key]);
}
