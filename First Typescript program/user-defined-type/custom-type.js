var users;
users = [
    {
        userName: 'rohan-mostafa',
        userId: 10257896
    },
    {
        userName: 'abdullah-sheikh',
        userId: 10257897
    }
];
var user;
user = {
    userName: 'rohan-mostafa',
    userId: 10257898
};
var user2;
user2 = {
    userName: 'farhan-sheikh',
    userId: 10257899
};
users.push(user);
users.push(user2);
console.log(users);
var getRequest;
getRequest = 'GET';
var requestHandler = function (requestType) {
    console.log(requestType);
};
requestHandler('GET');
