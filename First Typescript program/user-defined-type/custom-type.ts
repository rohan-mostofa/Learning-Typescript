// let user : object;
type userType = {userName : string, userId? : number};

let users : userType[];

users = [
    {
        userName : 'rohan-mostafa',
        userId : 10257896
    },

    {
        userName : 'abdullah-sheikh',
        userId : 10257897
    }
]

let user : userType;
user = {
    userName : 'rohan-mostafa',
    userId : 10257898
}

let user2 : userType;
user2 = {
    userName : 'farhan-sheikh',
    userId : 10257899
}

users.push(user);
users.push(user2);
console.log(users);


type requestType = 'GET' | 'POST';
let getRequest : requestType;
getRequest = 'GET';


const requestHandler = (requestType : requestType) => {
    console.log(requestType);
}

requestHandler('GET');

