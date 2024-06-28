let saldo = 0;

class BankAccount {
    constructor(account,amount){
        this.amount = amount;
        this.account = account;
    }

    deposit() {        
        if (this.amount > 0) {
            saldo += this.amount;
            console.log( `Saldo berhasil ditambahkan sebesar ${this.amount}, saldo saat ini adalah sebesar ${saldo}`);
        } else {
            console.log( `Saldo gagal ditambahkan` )
            }
    }

    withdraw() {
        if (this.amount > 0) {
            saldo -= this.amount;
            console.log( `Saldo berhasil diambil sebesar ${this.amount}, saldo saat ini adalah sebesar ${saldo}`);
        } else {
            console.log( `Saldo gagal diambil`);
        }
    }

    GetBalance() {
        return this.amount 
    }
}

let account1 = new BankAccount("Jordi", 1000);

console.log(account1.GetBalance());

setTimeout(() => {
    account1.deposit()
}, 1000);

account1.withdraw()