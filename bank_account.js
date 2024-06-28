class BankAccount {
    constructor(balance){
        this.balance = balance;
    }

    TambahSaldo(amount) {        
        if (amount > 0) {
            this.balance += amount;
            console.log( `Saldo berhasil ditambahkan sebesar ${amount}, saldo saat ini adalah sebesar ${this.balance}`);
        }else if (isNaN(amount)){
            console.log( `Anda tidak memasukkan nominal apapun!`)
        } else {
            console.log( `Saldo gagal ditambahkan` )
        }
    }

    KurangiSaldo(amount) {
        if (amount < this.balance && amount > 0) {
            this.balance -= amount;
            console.log( `Penarikan sebesar ${amount} berhasil, saldo saat ini adalah sebesar ${this.balance}`);
        } else if (isNaN(amount)){
            console.log( `Anda tidak memasukkan nominal apapun!`)
        }
        else {
            console.log( `Saldo anda tidak mencukupi`);
        }
    }
}

export { BankAccount };