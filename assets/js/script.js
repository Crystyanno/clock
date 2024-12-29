const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Caminho para o som que será reproduzido a cada segundo
const tickSound = new Audio('assets/audio/flip.mp3');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Formatação para dois dígitos
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    // Atualização no DOM
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    // Reproduz o som a cada segundo
    tickSound.play();
}, 1000);
