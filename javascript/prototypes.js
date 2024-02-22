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
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`)
}


let user = new Person("John", 9)

user.greet()
console.log(user)


//classes in JS

class Personn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

let user2 = new Personn("Smith", 10)
user2.greet()
console.log(user)