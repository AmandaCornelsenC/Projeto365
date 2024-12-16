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
    // Valores predefinidos para cada tipo de dado
    const valoresParte = ["Boca", "Pescoço", "Escolha", "Mão", "Peito", "Orelha"];
    const valoresAcao = ["Beijar", "Lamber", "Chupar", "Tocar", "Gelo", "Escolha"];
    const valoresTempo = ["30 segundos", "2 minutos", "1 minuto", "45 segundos", "5 minutos", "10 minutos"];

    let valores; // Variável para armazenar os valores corretos com base no dado

    // Determinar os valores adequados ao dado clicado
    if (dadoId === "dadoParte") {
        valores = valoresParte;
    } else if (dadoId === "dadoAcao") {
        valores = valoresAcao;
    } else if (dadoId === "dadoTempo") {
        valores = valoresTempo;
    }

    // Escolher um índice aleatório entre 0 e 5
    const numeroSorteado = Math.floor(Math.random() * 6);

    // Selecionar o valor correspondente
    const valorSorteado = valores[numeroSorteado];

    // Atualizar o texto do dado
    const dado = document.getElementById(dadoId);
    dado.innerText = valorSorteado; // Atualiza o conteúdo de texto do dado

    // Exibir o valor sorteado em um alerta (opcional)
    alert(`O valor sorteado foi: ${valorSorteado}`);
}



