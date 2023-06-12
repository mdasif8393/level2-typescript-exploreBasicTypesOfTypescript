"use strict";
class Human {
    constructor(name, species, work) {
        this.name = name;
        this.species = species;
        this.work = work;
    }
    HumanWork() {
        console.log(`${this.species} er nam ${this.name} r kaj ${this.work}`);
    }
}
const abul = new Human("Abul", "Manush", "Bekar");
abul.HumanWork();
