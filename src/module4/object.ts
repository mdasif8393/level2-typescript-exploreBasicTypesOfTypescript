class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //Parameter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    public makeSound() {
        console.log(`The ${this.name} dake ${this.sound} vabe`);
    }
}

const dog = new Animal("Jarman SHepherd", "Dog", "Ghew Ghew");
dog.name = "Kutta"
dog.makeSound();

const cat = new Animal("Persian", "Cat", "Mew Mew");
cat.makeSound();