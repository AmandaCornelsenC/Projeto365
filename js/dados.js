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
    } else {
        console.error("ID do dado inválido:", dadoId);
        return; // Encerra a função se o ID for inválido
    }

    // Escolher aleatoriamente um valor
    const numeroSorteado = Math.floor(Math.random() * valores.length); // Índice aleatório
    const valorSorteado = valores[numeroSorteado]; // Selecionar o valor correspondente

    // Atualizar o texto do dado com o valor sorteado
    const dado = document.getElementById(dadoId);
    if (dado) {
        dado.textContent = valorSorteado; // Atualiza o texto do elemento
    } else {
        console.error("Elemento não encontrado para o ID:", dadoId);
    }

    // Exibir o valor sorteado em um alerta (opcional)
    alert(`O valor sorteado foi: ${valorSorteado}`);
}




