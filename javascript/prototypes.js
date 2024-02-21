// Explanation of Proto
/*
let obj1 = {
    fName: "John",
};
let obj2 = {
    lName: "smith",
};

// obj2.__proto__ = obj1;
obj1.__proto__ = obj2;

console.log(obj1.lName)
*/

// Explanation of prototypes
function Person(name, age) {
    let person = Object.create(obj)
    person.name = name;
    person.age = age;
    return person
}
var obj = {
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

let user = Person("John", 9)

user.greet()
console.log()