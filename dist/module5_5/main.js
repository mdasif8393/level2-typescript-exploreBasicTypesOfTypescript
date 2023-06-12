import { add as addTwo } from './module';
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const result = addTwo(23, 43);
console.log(result);
