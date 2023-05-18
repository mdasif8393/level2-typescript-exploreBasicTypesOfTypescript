const createArrayP = <X,Y>(param1: X, param2: Y) : [X,Y] => {
    return [param1, param2];
}


const result1P = createArrayP<number, number>(1, 2);
const result2P = createArrayP<boolean, string>(true, "Sasa");