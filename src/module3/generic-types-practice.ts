type GenericArrayP<T> = Array<T>;

const rollNumberP : GenericArrayP<number> = [1, 2, 3, 4, 5];
const rollNBumberP2 : GenericArrayP<string> = ['21', '32'];
const rollNumberP3: GenericArrayP<boolean> = [true, false];

type NameRoll = {name:string, roll:number}

const userNameRollP : GenericArrayP<NameRoll> = [{name: 'AS' , roll: 2}];

type GenericArrayP1<X,Y> = [X,Y];

const manBool : GenericArrayP1<NameRoll, boolean> = [{name: "Alu", roll: 21}, false];


