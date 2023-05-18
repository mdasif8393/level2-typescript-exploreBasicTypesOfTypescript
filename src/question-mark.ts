//ternary operator
const age:number = 15;
const decision = (age>=18) ? "adult" : "Child";

//Nullish operator
//Null, Undefined

const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";

type Manush = {
    name: string;
    age: number;
    address: {
        city: "No City",
        road: "No Road",
        home?: ""};
    };
const manush1: Manush = {
    name: "Manush",
    age: 100,
    address: {
        city: "No City",
        road: "No Road",}}

const home = manush1?.address?.home ?? "No Home";