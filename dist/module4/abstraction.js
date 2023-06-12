"use strict";
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I am starting Engine....");
    }
    stopEngine() {
        console.log("I am stopping Engine");
    }
    move() {
        console.log("I am moving engine....");
    }
}
const vehicle1 = new Car("Car", "Toyota", 2000);
//abstract class
// abstract class Vehicle{
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number, 
//     ){}
//     abstract startEngine(): void;
//     abstract stopEngine(): void;
//     move(): void {
//         console.log("I am moving..");
//     }; 
// }
// class Car extends Vehicle{
//     startEngine(): void {
//         console.log("Start engine");
//     }
//     stopEngine(): void {
//         console.log("Stop engine");
//     }
// }
