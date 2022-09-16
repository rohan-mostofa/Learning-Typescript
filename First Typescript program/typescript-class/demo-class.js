var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Username = ".concat(this.userName, " & Age = ").concat(this.age));
    };
    return User;
}());
var UserOne = new User('rohan-mostafa', 20);
UserOne.display();
