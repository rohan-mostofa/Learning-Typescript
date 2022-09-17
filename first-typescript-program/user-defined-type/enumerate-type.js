// enum type = numeric, string, hetergenous
// numeric enum type
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 1] = "readData";
    requestType[requestType["saveData"] = 2] = "saveData";
    requestType[requestType["deleteData"] = 3] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.deleteData);
// string enum type
var requestTypeTwo;
(function (requestTypeTwo) {
    requestTypeTwo["readData"] = "Read Data";
    requestTypeTwo["saveData"] = "Save Data";
    requestTypeTwo["deleteData"] = "Delete Data";
})(requestTypeTwo || (requestTypeTwo = {}));
console.log(requestTypeTwo);
console.log(requestTypeTwo['readData']);
// hetergenous enum type
var requestTypeThree;
(function (requestTypeThree) {
    requestTypeThree[requestTypeThree["id"] = 1] = "id";
    requestTypeThree["readData"] = "Read Data";
    requestTypeThree["saveData"] = "Save Data";
})(requestTypeThree || (requestTypeThree = {}));
console.log(requestTypeThree);
console.log(requestTypeThree['readData']);
