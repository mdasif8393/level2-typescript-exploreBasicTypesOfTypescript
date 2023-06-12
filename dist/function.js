"use strict";
// //normal function
// function add (num1: number, num2: number = 10) : number {
//     return num1 + num2;
// }
// add(1);
// //arrow function
// const addArrow = (num1:number, num2:number) : number => num1 + num2;
// addArrow(1,2);
// const arr: number[] = [1,2,3];
// const newArray = arr.map((element: number) => element * element);
// const person : {
//     name: string;
//     balance: number;
//     addBalance(money: number): number;
// } = {
//     name: 'John',
//     balance: 1000,
//     addBalance(money){
//         return this.balance + money;
//     }
// }
// const user6 : {
//     name: string;
//     balance: number;
//     addBalance (money: number): string;
// } = {
//     name: "John",
//     balance: 10000,
//     addBalance(money) {
//         return `Total balance is ${this.balance + money}`;
//     },
// }
// //spread operator
// const myFriends: string[] = ["abul", "kabul", "Mobul"];
// const newFriends: string [] =["Kabul", "jabul", "Jasa", ...myFriends];
// newFriends.push(...myFriends);
// // console.log(newFriends);
// //rest operator
// const greetFriends = (...friends: string[]) : void => {
//     friends.forEach(friend => console.log(`Hi ${friend}`));
// }  
// greetFriends("abul", "kabul", "Mobul", "Haa");
// //array destructure
// const [bestFriend, a] = myFriends;
// console.log(bestFriend, a);
// //object destructure
// const myBestFriend = {
//     fullName: "Abul Bashar",
//     age: 24,
// }
// const {fullName: myFullName} = myBestFriend;
