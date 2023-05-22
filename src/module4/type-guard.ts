
//keyof guard
type Alphaneumeric = string | number;
//if(typeof param1 === "string" && typeof param2 === "string")
function add(param1: Alphaneumeric, param2: Alphaneumeric) : Alphaneumeric{
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString();
    }
}

add("1", "2");
add(1,2);

//In Guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUser | AdminUser) : string{
    if("role" in user){
        return `I am an admin and my role is ${user.role}`
    }
    else{
        return "I am normal user"
    }
}

const normalUser1: NormalUser = {name: "Mr. Kallu"};
const adminUser1: AdminUser = {name: "Mr. Gallu", role: "admin"};

const userType = getUser(adminUser1);
console.log(userType);

//instanceof guard
class Animal{
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log("I am making sound");
    }
}

class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log("I am Barking");
    }
}

class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeaw(){
        console.log("I am Meawing");
    }
}

function isDog(animal: Animal): animal is Dog{
    return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat{
    return animal instanceof Cat;
}

function getAnimal(animal: Animal){
    if(isDog(animal)){
        animal.makeBark();
    }
    else if(isCat(animal)){
        animal.makeMeaw();
    }
    else{
        animal.makeSound();
    }
}

const animal1 = new Dog("German Bhai", "Dog"); //Dog instance
const animal2 = new Cat("Persian Bhai", "Cat"); //Cat instance

getAnimal(animal2);
