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
    const dado = document.getElementById(dadoId);

    // Gerar um valor aleatório entre 1 e 6
    const numero = Math.floor(Math.random() * 6) + 1;

    // Geração de ângulos de rotação para simular o giro
    const rotationX = Math.floor(Math.random() * 360) + numero * 60;
    const rotationY = Math.floor(Math.random() * 360) + numero * 60;

    // Aplicar a rotação com animação
    dado.style.transition = 'transform 1s ease';
    dado.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    // Exibir o número sorteado após o término da animação
    setTimeout(() => {
        alert(`O número sorteado foi: ${numero}`);
    }, 1000); // Aguarda 1 segundo para o término da animação
}
