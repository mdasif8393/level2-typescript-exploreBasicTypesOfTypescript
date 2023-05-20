class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} is sleep for ${hours} hours`
    }
}

class Student extends Person {

    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student("Babul", 12, "Khulna");

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation
    }


    takeClasses(numberOfClass: number): string {
        return `This ${this.name} will take ${numberOfClass}`
    }
}
const teacher1 = new Teacher("Kabul", 43, "Dhaka", "Professor");