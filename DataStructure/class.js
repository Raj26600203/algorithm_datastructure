//Context vs Scope 

//Scope -- a cannot be referred to from the root.
function a (){
    let a = 4;
};

//Context - The keyword this means what the object that we in right now
console.log(this);

b();

//eg1
function b (){
    console.log(this);
}



//object & context
const object1 = {
    c: function (){
        console.log(this);
    }
};
object1.c();

//Class
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    indroduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}


class Wizard extends Player {
    constructor (name, type, skill){
        super (name, type);
        this.skill = skill;
    };
    play(){
        console.log(`I'm a ${this.type}, ${this.name}, who has ${this.skill}`);
    };
};

const wizard1 = new Wizard ('Shelly','Healer','Healing');
wizard1.play();