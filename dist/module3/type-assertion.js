"use strict";
let emni;
emni = "Asdfdaf";
emni;
let emni1;
emni1 = 12313;
emni1;
let emni1P;
emni1P = 123;
emni1P;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted value is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `The converted value is ${value}`;
    }
}
const resultToBeNumber = kgToGram(100);
const resultToBeString = kgToGram('1000');
function kgToGramP(value) {
    if (typeof value === "number") {
        const result = value * 100;
        return `The result from number to result is ${result}`;
    }
    if (typeof value === "string") {
        const result = parseFloat(value) * 999;
        return `Converted result from string is ${result}`;
    }
}
const resultFromNumber = kgToGramP(100);
const resultFromString = kgToGramP('10');
try {
    console.log('aa');
}
catch (error) {
    console.log(error.message);
}
