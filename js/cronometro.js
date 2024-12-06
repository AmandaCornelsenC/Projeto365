let cronometroAtivo = false;
let tempoRestanteSegundos = 0;
let intervaloCronometro;

const mostrarCronometroBtn = document.getElementById("mostrarCronometroBtn");
const cronometroDiv = document.getElementById("cronometro");
const iniciarCronometroBtn = document.getElementById("iniciarCronometroBtn");
const tempoRestanteEl = document.getElementById("tempoRestante");
const tempoMinutosEl = document.getElementById("tempoMinutos");
const tempoSegundosEl = document.getElementById("tempoSegundos");

mostrarCronometroBtn.addEventListener('click', function () {
    if (cronometroAtivo) {
        // Esconde o cronômetro
        cronometroDiv.style.display = 'none';
        mostrarCronometroBtn.textContent = 'Mostrar Cronômetro';
        cronometroAtivo = false;
    } else {
        // Exibe o cronômetro
        cronometroDiv.style.display = 'block';
        mostrarCronometroBtn.textContent = 'Esconder Cronômetro';
        cronometroAtivo = true;
    }
});

// Função para iniciar o cronômetro
iniciarCronometroBtn.addEventListener('click', function () {
    // Captura o valor dos minutos e segundos
    const minutos = parseInt(tempoMinutosEl.value) || 0;
    const segundos = parseInt(tempoSegundosEl.value) || 0;

    // Calcula o tempo total em segundos
    tempoRestanteSegundos = (minutos * 60) + segundos;

    // Verifica se o tempo é válido
    if (tempoRestanteSegundos <= 0) {
        alert("Por favor, insira um tempo válido!");
        return;
    }

    // Exibe o tempo inicial
    mostrarTempoRestante();

    // Desabilita o botão enquanto o cronômetro está rodando
    iniciarCronometroBtn.disabled = true;

    // Inicia o cronômetro
    intervaloCronometro = setInterval(function () {
        tempoRestanteSegundos--;

        // Atualiza o tempo exibido
        mostrarTempoRestante();

        // Verifica se o tempo acabou
        if (tempoRestanteSegundos <= 0) {
            clearInterval(intervaloCronometro);
            alert("O tempo acabou!");
            iniciarCronometroBtn.disabled = false;
        }
    }, 1000); // Atualiza o cronômetro a cada 1 segundo
});

// Função para mostrar o tempo restante
function mostrarTempoRestante() {
    const minutosRestantes = Math.floor(tempoRestanteSegundos / 60);
    const segundosRestantes = tempoRestanteSegundos % 60;

    // Atualiza o texto com o tempo restante
    tempoRestanteEl.textContent = `Tempo restante: ${minutosRestantes}m ${segundosRestantes}s`;
}
