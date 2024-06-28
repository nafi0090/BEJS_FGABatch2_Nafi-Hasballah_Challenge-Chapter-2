import { CustomError } from "./Utils/CustomError.js";
import { BankAccount } from "./bank_account.js";

class BankSystem extends BankAccount{
    constructor(name, balance){
        super(balance);
        this.name = name;
    }

    Deposit (){
        let deposit = parseInt(window.prompt("Masukkan Angka"))

        if (isNaN(deposit)) throw new CustomError('VN001', 'Deposit is NaN');
        
        this.TambahSaldo(deposit)
    }
    
    Withdraw  (){
        let withdraw = parseInt(window.prompt("Masukkan Angka"))

        if (isNaN(withdraw)) throw new CustomError('VN001', 'withdraw is NaN');
        
        this.KurangiSaldo(withdraw)
    }

    GetBalance(){
        return this.balance
    }
}

let account1 = new BankSystem("Jordi", 1000);

function main(){
    console.log(account1.GetBalance())
    setTimeout(() => {
        try {
            account1.Deposit()
            account1.Withdraw()
            console.log(account1.GetBalance())
        } catch (error) {
            console.log(error.name, error.message);
        }
    }, 1000);
    console.log(account1.GetBalance())
}

main()
