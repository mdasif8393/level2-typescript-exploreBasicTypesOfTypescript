//PiCK

interface Person{
    name: string;
    email?: string;
    contactNo: string;
}

type Email = Pick<Person, "email">
type Contact = Pick<Person, "contactNo" | "email">


//Omit
type Name = Omit<Person, "email" | "contactNo">

//Partial
type Optional = Partial<Person>

//Required
type RequiredProperties = Required<Person>

//Readonly
type ReadonlyProperties = Readonly<Person>

const Person1: ReadonlyProperties = {
    name: "John",
    email: "john@example.com",
    contactNo: "'aaa"
}

// type myObj = {
//     [key: string]: string;
// }

//Record
//  type myObj = Record<string, string>

type myObj = Record<'a' | 'b' | 'c', string>

 const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
 }