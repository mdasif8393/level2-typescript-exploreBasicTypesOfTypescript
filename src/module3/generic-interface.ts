// Generic Interface
interface GenericInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U;
}

const crush3: GenericInterface<boolean, string> = {
    name: "Crush",
    husband: true,
    wife: "Sokina"
}

const crush4: GenericInterface<string> = {
    name: "Ket",
    husband: "Wislet"
};

interface HusbandInterface {
    name: string,
    salary: number
}

const crush5: GenericInterface<HusbandInterface> = {
    name: "Ket",
    husband: {
        name: "Persian",
        salary: 100,
    }
}

interface PersonInterface {
    name: string,
    age: number
}

const crush6 : GenericInterface<PersonInterface, PersonInterface> = {
    name: "Kate",
    husband: {
        name: "Persian",
        age: 30,
    },
    wife: {
        name: "Sokina",
        age: 20,
    }
}






// Generic Type
type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [33, 44, 22];
const rollNumber2: GenericArray<string> = ["22", "32", "34"];
const rollNumber3: GenericArray<number> = [22, 332, 44];
const rollNBumber3: GenericArray<boolean> = [true, false];


interface RelationWithSalaryInterface { name: string, salary: number }

const userNameAndRollNumbers: GenericArray<RelationWithSalaryInterface> = [{
    name: "John",
    salary: 33,
},
{
    name: "Jane",
    salary: 44,
}];

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Ami", "Tumi"];

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
    {
        name: "Ami",
        salary: 1000
    },
    "Mokbul"
];


