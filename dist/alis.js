"use strict";
const crush1 = {
    name: "Solkina",
    profession: "Engineer",
    address: "Moscow"
};
const crush2 = {
    name: "Alu",
    age: 21,
    profession: "Bekar",
    address: "London"
};
const checkCrush = true;
console.log(checkCrush);
const courseName = "Mext level web development";
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
