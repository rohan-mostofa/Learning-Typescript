// enum type = numeric, string, hetergenous

// numeric enum type
enum requestType {
    readData = 1,
    saveData = 2,
    deleteData
}

console.log(requestType);
console.log(requestType.deleteData);

// string enum type
enum requestTypeTwo {
    readData = 'Read Data',
    saveData = "Save Data",
    deleteData = "Delete Data"
}

console.log(requestTypeTwo);
console.log(requestTypeTwo['readData']);

// hetergenous enum type
enum requestTypeThree {
    id = 1,
    readData = 'Read Data',
    saveData = "Save Data"
}

console.log(requestTypeThree);
console.log(requestTypeThree['readData']);
