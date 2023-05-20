class Human{
    constructor(public name: string, public species: string, public work: string){
    }
    public HumanWork(){
        console.log(`${this.species} er nam ${this.name} r kaj ${this.work}`);
    }
}

const abul = new Human("Abul", "Manush", "Bekar");
abul.HumanWork();