//Backend Javascript Challenge Document

let saldo = 50000;

//Fungsi untuk menambah saldo
function addSaldo (){
    let addition = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    if (!isNaN(addition) && addition >= 0){ // // Melakukan sesuatu jika addition adalah angka dan lebih besar dari atau sama dengan 0
       saldo += addition;
       alert("Berhasil ditambahkan. Saldo:" + saldo);
    } else {
        alert("Masukkan jumlah saldo");
    }
}

//Fungsi untuk mengurangi saldo
function subtractSaldo (){
    let subtraction = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurang:"));
    if (!isNaN(subtraction) && subtraction >= 0){  // Melakukan sesuatu jika subtraction adalah angka dan lebih besar dari atau sama dengan 0
        saldo -= subtraction;
        alert("berhasil dikurangi. Saldo:" +saldo);
    } else{
        alert("saldo tidak mencukupi");
    }
}

/* addSaldo () : fungsi yang bertujuan untuk menambah saldo ke akun
   isNaN() dan >=0: untuk memerikasa input yang dimasukkan valid (berupa angka positif)
   alert : untuk menampilkan pesan
   prompt : menampilkan pesan yang minta input teks pengguna
   parseFloat : mengubah nilai tipe data string yang berisi angka menjadi floating-point(desimal) atau mengambil string sebagai argumen dan mencoba menguraikannya menjadi nilai floating-point.
*/

cat chapter_1/index.js
// variabel saldo
let saldo = 0;

// fungsi tambahSaldo
function tambahSaldo(n) {
    return saldo + n;
}

// fungsi kurangiSaldo
function kurangiSaldo(n) {
    return saldo - n;
}

let ulang = true;
do {
    // user memilih menu
    let menu = Number(window.prompt("Silahkan pilih operasional:\n1. Tambahkan saldo\n2. Kurangi saldo"));

    switch (menu) {
        case 1:
            let deposit = Number(window.prompt("Berapa nominal yang akan di depositkan?"));
            saldo = tambahSaldo(deposit);
            alert("Saldo kamu sekarang adalah Rp." + saldo);
            break;
        case 2:
            let kredit = Number(window.prompt("Berapa nominal yang akan di cairkan?"));
            saldo = kurangiSaldo(kredit);
            alert("Saldo kamu sekarang adalah Rp." + saldo);
            break;
        default:
            alert("menu tidak diketahui!");
    }

    ulang = confirm("Ulangi transaksi?");
} while (ulang);%                                                                                                                           