type PersonTypeP = {
    name: string;
    age: number;
    salary: number;
}

type newType = keyof PersonType;

function getPropertyP<X,Y extends keyof X>(obj: X,  key: Y){
    return obj[key];
}

const propertyP = getPropertyP({name: "Mr.X", age: 10}, "age");