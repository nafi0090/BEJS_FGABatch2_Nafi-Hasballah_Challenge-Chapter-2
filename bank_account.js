let saldo = 500;

class BankAccount {
    constructor(amount, account){
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
            console.log( `Saldo berhasil ditambahkan sebesar ${this.amount}, saldo saat ini adalah sebesar ${saldo}`);
        } else {
            console.log( `Saldo gagal ditambahkan`);
        }
    }

    GetBalance() {
        return this.amount 
    }
}
