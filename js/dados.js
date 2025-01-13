function mostrarJogoDados() {
    const jogoDados = document.getElementById('jogoDados');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoEsconder = document.getElementById('botaoEsconder');

    jogoDados.style.display = 'block'; // Exibe o jogo
    botaoJogar.style.display = 'none'; // Esconde o botão "Iniciar Jogo"
    botaoEsconder.style.display = 'inline-block'; // Exibe o botão "Esconder Jogo"
}

function esconderJogoDados() {
    const jogoDados = document.getElementById('jogoDados');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoEsconder = document.getElementById('botaoEsconder');

    jogoDados.style.display = 'none'; // Esconde o jogo
    botaoJogar.style.display = 'inline-block'; // Exibe o botão "Iniciar Jogo"
    botaoEsconder.style.display = 'none'; // Esconde o botão "Esconder Jogo"
}

function rolarDado(tipo) {
    // Define os valores para cada tipo de dado
    const valoresLocal = ["Boca", "Pescoço", "Escolha", "Mão", "Peito", "Orelha"];
    const valoresTempo = ["30 segundos", "2 minutos", "1 minuto", "45 segundos", "5 minutos", "10 minutos"];
    const valoresAcao = ["Beijar", "Lamber", "Chupar", "Tocar", "Gelo", "Escolha"];

    let valores;

    // Selecione os valores com base no tipo
    if (tipo === 'local') {
        valores = valoresLocal;
    } else if (tipo === 'tempo') {
        valores = valoresTempo;
    } else if (tipo === 'acao') {
        valores = valoresAcao;
    }

    // Escolher aleatoriamente um valor
    const numeroSorteado = Math.floor(Math.random() * valores.length);
    const valorSorteado = valores[numeroSorteado];

    // Exibir o valor sorteado no local correto
    document.getElementById(tipo).textContent = valorSorteado;
}
