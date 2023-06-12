"use strict";
// type PersonType = {
//     name: string;
//     age: never;
//     address: string;
// }
// // Expected answer : 'name' | 'age' | 'address'
// type newTypeUsingKeyOf = keyof PersonType; 
// // ({name: "Mr. X", age: 100}, "name") Mr. X
// //get value from a1;
// const a1 = {
//     name: "Mr. X",
//     age: 100,
// }
// console.log(a1["name"]);
// console.log(a1["age"]);
// function getProperty<X,Y extends keyof X>(obj: X, key: Y){
//     obj[key]
// }
// const property = getProperty({name: "Mr. X", age: 100}, "name");
