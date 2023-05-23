//interface
interface Vehicle{
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Car implements Vehicle{

    constructor(
        public name: string,
        public brand: string,
        public model: number, 
    ){}

    startEngine(): void {
        console.log("I am starting Engine....");
    }
    stopEngine(): void {
        console.log("I am stopping Engine");
    }
    move(): void {
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
//     abstract move(): void; 
//     test() {
//         console.log("I am for testing purpose");
//     }
// }

// class Car extends Vehicle{
//     startEngine(): void {
//         console.log("Start engine");
//     }
//     stopEngine(): void {
//         console.log("Stop engine");
//     }
//     move(): void {
//         console.log("Moving");
//     }
// }
 