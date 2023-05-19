//Arrow function
const createArray = <X,Y>(param1: X, param2: Y) : [X,Y] => {
    return [param1, param2];
}

const result = createArray<string, string>("Bangladesh", "I Love BD");
const result1 = createArray<boolean, Array<string>>(true, ["BD"]);
interface NameInterface{
    name: string;
    age: number;
}
const result3 = createArray<NameInterface, NameInterface>({name: "As", age: 32}, {name: "As", age:33});

// spread operator



// const newData = {...myInfo, crush};
// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = "Ket Winslet";
//     const newData = {...myInfo, crush};
//     return newData;
// }

// const myInfo = {
//     name: "Persian",
//     age: 100,
//     salary: 11110000
// }

// const result4 = addMeInMyCrushMind<{name: string, age: number, salary: number}>(myInfo);

//Normal function
function createArray2<X,Y>(param1: X, param2: Y) : [X,Y]{
    return [param1, param2];
}

