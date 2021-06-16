//!EXTENDS

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

class BannedUser extends User {
    bannedMessage(reason){
        console.log(`Sorry, ${this.name}, your account has been banned for ${reason}.`);
    }
}


//Instance of User Class
let anonDude = new User ('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser ('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

//Pratice of BannedUser
let bannedUser = new BannedUser('Seth');
bannedUser.greet();
bannedUser.bannedMessage('Fraud');