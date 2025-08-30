"use strict";
// INTERFACE
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text} ${this.name}`);
    }
}
let user1;
user1 = new Person("zaid");
//user.name = "Zaid Anwar"; error
// EXTENDING 
