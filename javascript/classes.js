class User {
    constructor(name, age) {
        this.name = name;
    }
    sayHi() {
        console.log("Hello " + this.name)
    }
}

let user = new User("John")
user.sayHi()

let user1 = new User("Andrew")
user1.sayHi()

let user2 = new User("Tristan")
user2.sayHi()