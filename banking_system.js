//Backend Javascript Challenge Document

let saldo = 0;

class BankAccount {
    constructor() {
        this.saldo =0;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(amount) && amount >= 0) {
                this.saldo += amount;
            resolve(`Berhasil ditambahkan. Saldo: ${this.saldo}`);
         } else {
            reject("Masukkan jumlah saldo yang valid.");
         }
        }, 1000);
    });
}

    withdraw(amount) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(amount) && amount >= 0) {
                if (amount <= this.saldo) {
                    this.saldo -= amount;
                    resolve(`Berhasil dikurangi. Saldo: ${this.saldo}`);
                } else{
                    reject("Saldo tidak mencukupi");
                }
            } else{
                reject("Masukkan jumlah saldo yang valid");
            }
        }, 1000);
    });
}

    getSaldo(){
        return this.saldo;
    }
}
const bankAccount = new BankAccount();

async function main() {
  let ulang = true;
  do {
    // User memilih menu
    let menu = Number(prompt("Silahkan pilih operasional:\n1. Tambahkan saldo\n2. Kurangi saldo"));

    switch (menu) {
      case 1:
        let debit = Number(prompt("Berapa nominal yang akan didepositkan?"));
        try {
          const message = await bankAccount.deposit(debit);
          alert(message);
        } catch (error) {
          alert(error);
        }
        break;
      case 2:
        let kredit = Number(prompt("Berapa nominal yang akan dicairkan?"));
        try {
          const message = await bankAccount.withdraw(kredit);
          alert(message);
        } catch (error) {
          alert(error);
        }
        break;
      default:
        alert("Menu tidak diketahui!");
    }

    ulang = confirm("Ulangi transaksi?");
  } while (ulang);
}

main();





