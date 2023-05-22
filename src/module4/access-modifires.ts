class BankAccount{
    id: number;
    name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }   
}

class StudentAccount extends BankAccount{
    test(){
        this.balance;
    }
}



const myAccount = new BankAccount (444, "Persian", 3333);
console.log(myAccount);