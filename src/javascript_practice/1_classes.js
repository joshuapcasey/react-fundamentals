//! ES6 JS CLASSES

class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1: 
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    //Method 2:
    status() {
        console.log(`Current Status: ${this.type}`);
    };
};


// Instance of the class/new object
let anonDude = new User('Anonymous dude');

//we can now use the new instance of the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User('Anonymous Lady');
anonLady.greet();
anonLady.status();

//Another instance of the class
let jeff = new User ('Jeff');
jeff.greet();
jeff.status();


// Self practice

let atwood = new User ('Mirabel Atwood');
atwood.greet();
atwood.status();

let sterling = new User('Aiden Sterling');
sterling.greet();
sterling.status();