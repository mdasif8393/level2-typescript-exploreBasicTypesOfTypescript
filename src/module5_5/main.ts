import Methods from './utils/index';

const add = (param1: number, param2: number, param3: number) : number => {
    return  param1 + param2 + param3;
}

const result = Methods.addTwo(1,2);
console.log(result);
