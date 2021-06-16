//! SUPER

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


class TrialUser extends User {
    trialEnding(){
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};


//super
class BronzeLevelUser extends User {
    //we add the ccinfo property to the user here
    constructor(username, password, ccinfo){
        //if you're going to user 'this' in your constructor, you must have super that points to the parent constructor
        super(username, password);
        //the 'this' keyword wouldn't work without super.
        this.type = "Bronze User",
        this.ccinfo = ccinfo
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}


//Instance of User Class
let anonDude = new User ('Anonymous');
anonDude.greet();
anonDude.status();

//instance of super
let bronzeGuy = new BronzeLevelUser('Bronze Dude', "bronze1234", 000011112222333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
bronzeGuy.getInfo(); //I'm a little confused here.