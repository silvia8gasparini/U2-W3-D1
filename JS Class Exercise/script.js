class User {
    constructor(_firstName, _lastName, _age, _location) {
this.firstName = _firstName;
this.lastName = _lastName;
this.age = _age;
this.location = _location;
    }

compareAge(otherUser) {
if (this.age > otherUser.age) {
    return `${this.firstName} è più vecchio di ${otherUser.firstName}.`
} else if (this.age < otherUser.age) {
    return `${this.firstName} è più giovane di ${otherUser.firstName}.`
} else {
    return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`
}

}

}

let user1 = new User("Joel", "Miller", 44, "Austin")
let user2 = new User("Ellie", "Williams", 14, "New York")
let user3 = new User("Tess", "Servopoulos", 44, "Boston")

console.log(user1.compareAge(user2))
console.log(user2.compareAge(user1))
console.log(user1.compareAge(user3))
