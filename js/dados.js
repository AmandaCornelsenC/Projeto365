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

    // Definir rotação para cada número
    let rotationX, rotationY;

    switch (numero) {
        case 1:
            rotationX = 0;
            rotationY = 0;
            break;
        case 2:
            rotationX = 0;
            rotationY = 90;
            break;
        case 3:
            rotationX = 0;
            rotationY = 180;
            break;
        case 4:
            rotationX = 0;
            rotationY = -90;
            break;
        case 5:
            rotationX = 90;
            rotationY = 0;
            break;
        case 6:
            rotationX = -90;
            rotationY = 0;
            break;
    }

    // Aplicar a rotação 3D com animação
    dado.style.transition = 'transform 1s ease';
    dado.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    // Exibir o número sorteado após a rotação
    setTimeout(() => {
        alert(`O valor sorteado foi: ${numero}`);
    }, 1000);
}

