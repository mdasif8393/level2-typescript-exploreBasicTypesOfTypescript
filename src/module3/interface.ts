// type User = {
//     name: string;
//     age: number
// }

// type ExtendedUser =  User & {
//     role: string;
// }

// interface IUser{
//     name: string;
//     age: number;
// }


// const userWithTypeAlias: User = {
//     name: "Abul",
//     age: 21,
// }

// const userWithInterface: IUser = {
//     name: "Abul",
//     age: 22,
// }

// interface IExtendedUser extends IUser {
//     role: string;
// }

// const user7 : IExtendedUser = {
//     name: "Abul",
//     age: 22,
//     role: "Developer"
// }

// type AddNumberType = (num1: number, num2:number) => number;

// // interface IAddNumber {
// //     (num1: number, num2: number) : number;
// // }

// interface IAddNumber {
//     (num1: number, num2: number) : number;
// }

// const addNumber: IAddNumber = (num1, num2) => num1 * num2; 

// type rollNumberType = number[];



// interface IRollNumber{
//     [index:number] : string
// }

// const rollNumbers : IRollNumber = ["a", "a"];