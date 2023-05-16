let emni : any;
emni = "Asdfdaf";

(emni as string);

let emni1 : any;
emni1 = 12313;

(emni1 as string);

let emni1P : any;
emni1P = 123;
emni1P as string;

function kgToGram(param: string | number) : string | number | undefined {
    if(typeof param === "string"){
        const value = parseFloat(param)*1000;
        return `The converted value is ${value}`
    }
    if(typeof param === "number"){
        const value = param * 1000;
        return `The converted value is ${value}`
    }
}
const resultToBeNumber = kgToGram(100) as number;
const resultToBeString = kgToGram('1000') as string;

function kgToGramP(value: number | string) : string| number | undefined {
    if(typeof value === "number"){
        const result = value * 100;
        return `The result from number to result is ${result}`
    }
    if(typeof value === "string"){
        const result = parseFloat(value) * 999;
        return `Converted result from string is ${result}`
    }
}

const resultFromNumber = kgToGramP(100) as number;
const resultFromString = kgToGramP('10') as string;

type CustomErrorType = {
    message: string;
}

try{
    console.log('aa');
}

catch(error){
    console.log((error as CustomErrorType).message);
}