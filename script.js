// Fungsi untuk menghitung mundur
function countdown(hours, minutes) {
    // Menghitung total detik
    var totalSeconds = hours * 3600 + minutes * 60;

    // Mendapatkan elemen countdown
    var countdownElement = document.getElementById("countdown");

    // Update countdown setiap detik
    var countdownInterval = setInterval(function () {
        // Mendapatkan jam, menit, dan detik yang tersisa
        var hoursRemaining = Math.floor(totalSeconds / 3600);
        var minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
        var secondsRemaining = Math.floor(totalSeconds % 60);

        // Format waktu menjadi HH:MM:SS
        var formattedTime = padZero(hoursRemaining) + ":" + padZero(minutesRemaining) + ":" + padZero(secondsRemaining);

        // Menampilkan waktu hitung mundur
        countdownElement.textContent = formattedTime;

        // Mengurangi total detik
        totalSeconds--;

        // Berhenti hitung mundur jika waktu telah habis
        if (totalSeconds < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Waktu telah habis!";
        }
    }, 1000);
}

// Fungsi untuk memastikan dua digit pada angka
function padZero(number) {
    return number < 10 ? "0" + number : number;
}

// Fungsi untuk memulai hitung mundur
function startCountdown() {
    var hoursInput = document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");

    var hours = parseInt(hoursInput.value);
    var minutes = parseInt(minutesInput.value);

    // Validasi input
    if (isNaN(hours) && isNaN(minutes)) {
        alert("Masukkan waktu yang valid!");
        return;
    }

    // Set nilai default jika salah satu input kosong
    if (isNaN(hours)) {
        hours = 0;
    }
    if (isNaN(minutes)) {
        minutes = 0;
    }

    // Redirect ke halaman hitung mundur dengan parameter waktu
    var countdownUrl = "countdown.html?hours=" + hours + "&minutes=" + minutes;
    location.href = countdownUrl;
}

// Ambil parameter waktu dari URL pada halaman hitung mundur
function getParametersFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var hours = parseInt(urlParams.get("hours"));
    var minutes = parseInt(urlParams.get("minutes"));

    // Validasi input
    if (isNaN(hours) || isNaN(minutes)) {
        alert("Parameter waktu tidak valid!");
        return;
    }

    // Mulai hitung mundur
    countdown(hours, minutes);
}

// Memeriksa apakah halaman saat ini adalah halaman hitung mundur
if (document.title === "Set Hitung Mundur - Countdown") {
    getParametersFromUrl();
}

function resetInput(inputId) {
    var input = document.getElementById(inputId);
    input.value = "";
}
