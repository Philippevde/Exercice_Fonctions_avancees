const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function reformatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function reformatNamesArray(array, callback) {
    return array.map(callback);
}

const reformattedPeople = reformatNamesArray(people, reformatName);

console.log(reformattedPeople);
