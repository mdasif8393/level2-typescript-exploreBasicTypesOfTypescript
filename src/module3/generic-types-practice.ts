type GeneticPTuple<X,Y> = [X,Y];

const crush : GeneticPTuple<string, string> = ["Abul", "Kabul"];

const salary2: GenericTuple<{name: string, age: number}, string> = [
    {
        name: "John",
        age: 20,
    },
    "Ami"
];
