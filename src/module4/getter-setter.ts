class BankAccount{
    id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }

    private getTestBalance() : number{
        return this._balance;
    }
    //get getTestBalance
    get Test(): number{
        return this.getTestBalance();
    }

    //getter
    get balance(){
        return this._balance;
    }

    //setter
    set deposit(amount: number){
        this._balance = this._balance + amount;
    }

    getBalance() : number{
        return this._balance;
    }
    addDeposit(amount: number){
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount{
    test(){
        this.Test
    }
}



const myAccount = new BankAccount (444, "Persian", 100);
myAccount.addDeposit(50);
const balance = myAccount.getBalance();
console.log(balance);
const balance1 = myAccount.balance; //getter
console.log(balance1); 
myAccount.deposit = 100;
console.log(myAccount.balance); //setter