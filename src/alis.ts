type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const crush1 : CrushType = {
    name: "Solkina",
    profession: "Engineer",
    address: "Moscow"
}

const crush2 : CrushType = {
    name: "Alu",
    age: 21,
    profession: "Bekar",
    address: "London"
}

type CrushMarriedType = boolean;

const checkCrush : CrushMarriedType = true;
console.log(checkCrush);

type CourseNameType = string;
const courseName : CourseNameType = "Mext level web development";

type OperationType = (x: number, y: number) => number;
const calculate = (number1: number, number2: number, operation: OperationType) => {
    return operation(number1, number2)
}

calculate(10,20, (x,y) => x + y);
calculate(10,20, (x,y) => x - y);
