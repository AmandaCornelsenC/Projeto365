function mostrarJogoDados() {
    const jogoDados = document.getElementById('jogoDados');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoEsconder = document.getElementById('botaoEsconder');

    jogoDados.style.display = 'flex'; // Exibe o jogo de dados
    botaoJogar.style.display = 'none'; // Esconde o botão "Iniciar Jogo"
    botaoEsconder.style.display = 'inline-block'; // Exibe o botão "Esconder Jogo"
}

function esconderJogoDados() {
    const jogoDados = document.getElementById('jogoDados');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoEsconder = document.getElementById('botaoEsconder');

    jogoDados.style.display = 'none'; // Esconde o jogo de dados
    botaoJogar.style.display = 'inline-block'; // Exibe o botão "Iniciar Jogo"
    botaoEsconder.style.display = 'none'; // Esconde o botão "Esconder Jogo"
}

function rolarDado(dadoId) {
    // Dados com valores predefinidos
    const valoresParte = ["Boca", "Pescoço", "Escolha", "Mão", "Peito", "Orelha"];
    const valoresAcao = ["Beijar", "Lamber", "Chupar", "Tocar", "Gelo", "Escolha"];
    const valoresTempo = ["30 segundos", "2 minutos", "1 minuto", "45 segundos", "5 minutos", "10 minutos"];

    let valores; // Variável para armazenar os valores corretos com base no dado

    // Selecionar os valores de acordo com o ID do dado
    if (dadoId === "dadoParte") {
        valores = valoresParte;
    } else if (dadoId === "dadoAcao") {
        valores = valoresAcao;
    } else if (dadoId === "dadoTempo") {
        valores = valoresTempo;
    }

    // Escolher aleatoriamente um valor
    const numeroSorteado = Math.floor(Math.random() * 6); // Índice aleatório de 0 a 5
    const valorSorteado = valores[numeroSorteado]; // Selecionar o valor

    // Atualizar o texto do dado com o valor sorteado
    const dado = document.getElementById(dadoId);
    dado.textContent = valorSorteado;

    // Opcional: Exibir o valor sorteado em um alerta
    alert(`O valor sorteado foi: ${valorSorteado}`);
}


