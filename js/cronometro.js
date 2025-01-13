// Variáveis
let cronometroAtivo = false;
let tempoRestanteSegundos = 0;
let intervaloCronometro;

const mostrarCronometroBtn = document.getElementById("mostrarCronometroBtn");
const cronometroDiv = document.getElementById("cronometro");
const iniciarCronometroBtn = document.getElementById("iniciarCronometroBtn");
const tempoRestanteEl = document.getElementById("tempoRestante");
const tempoMinutosEl = document.getElementById("tempoMinutos");
const tempoSegundosEl = document.getElementById("tempoSegundos");

// Esconde o cronômetro ao carregar a página
window.addEventListener("DOMContentLoaded", function () {
    cronometroDiv.style.display = "none"; // Garante que está escondido
    mostrarCronometroBtn.textContent = "Mostrar Cronômetro";
});

// Mostrar/Esconder o cronômetro
mostrarCronometroBtn.addEventListener('click', function () {
    if (cronometroAtivo) {
        cronometroDiv.style.display = 'none';
        mostrarCronometroBtn.textContent = 'Mostrar Cronômetro';
        cronometroAtivo = false;
    } else {
        cronometroDiv.style.display = 'block';
        mostrarCronometroBtn.textContent = 'Esconder Cronômetro';
        cronometroAtivo = true;
    }
});

// Função para iniciar o cronômetro
iniciarCronometroBtn.addEventListener('click', function () {
    const minutos = parseInt(tempoMinutosEl.value) || 0;
    const segundos = parseInt(tempoSegundosEl.value) || 0;

    tempoRestanteSegundos = (minutos * 60) + segundos;

    if (tempoRestanteSegundos <= 0) {
        alert("Por favor, insira um tempo válido!");
        return;
    }

    mostrarTempoRestante();
    iniciarCronometroBtn.disabled = true;

    intervaloCronometro = setInterval(function () {
        tempoRestanteSegundos--;

        mostrarTempoRestante();

        if (tempoRestanteSegundos <= 0) {
            clearInterval(intervaloCronometro);
            alert("O tempo acabou!");
            iniciarCronometroBtn.disabled = false;
        }
    }, 1000);
});

// Função para exibir o tempo restante
function mostrarTempoRestante() {
    const minutosRestantes = Math.floor(tempoRestanteSegundos / 60);
    const segundosRestantes = tempoRestanteSegundos % 60;

    tempoRestanteEl.textContent = `Tempo restante: ${minutosRestantes}m ${segundosRestantes}s`;
}
