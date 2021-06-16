// ! CONSTRUCTORS

class User {
    constructor(first, last, e){
        this.f =first;
        this.l = last;
        this.email = e;
    }
}


let userOne = new User("Paul", "O'Conner", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Conner
console.log(userOne); // User {f: "Paul", l: "O'Conner", email: "poconner@elevenfifty.org"}