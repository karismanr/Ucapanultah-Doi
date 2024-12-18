// Custom
var pengirim = "karismanr";
var musik = "";
var ucapan = "Selamat Ulang Tahun, Semoga Panjang Umur dan sehat selalu";
var background1 = "";
var background2 = "";
var noWhatsapp = "082234336921";
var pesanWhatsapp = "Dibaca ya sayang";

// Fungsi untuk menampilkan notifikasi awal
function showInitialNotification() {
    Swal.fire({
        title: 'Hi Sayang',
        confirmButtonText: 'OK'
    });

    // Hapus class blur setelah notifikasi awal ditampilkan
    document.querySelector('.main').classList.remove('blur');
}

// Panggil fungsi notifikasi awal
showInitialNotification();

// Tambahkan event listener untuk tombol
document.getElementById('btnNotif').addEventListener('click', function() {
    // Tambahkan class blur saat tombol ditekan
    document.querySelector('.main').classList.add('blur');
    // Panggil fungsi notifikasi
    showInitialNotification();
});

DekaTutorial(pengirim, musik, ucapan, background1, background2, noWhatsapp, pesanWhatsapp);