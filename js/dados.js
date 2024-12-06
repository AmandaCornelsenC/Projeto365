function mostrarJogoDados() {
    const jogoDados = document.getElementById('jogoDados');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoEsconder = document.getElementById('botaoEsconder');

    jogoDados.style.display = 'flex'; // Mostra o jogo
    botaoJogar.style.display = 'none'; // Esconde o botão "Iniciar Jogo"
    botaoEsconder.style.display = 'inline-block'; // Mostra o botão "Esconder Jogo"
}

function esconderJogoDados() {
    const jogoDados = document.getElementById('jogoDados');
    const botaoJogar = document.getElementById('botaoJogar');
    const botaoEsconder = document.getElementById('botaoEsconder');

    jogoDados.style.display = 'none'; // Esconde o jogo
    botaoJogar.style.display = 'inline-block'; // Mostra o botão "Iniciar Jogo"
    botaoEsconder.style.display = 'none'; // Esconde o botão "Esconder Jogo"
}

function rolarDado(id) {
    const dado = document.getElementById(id);
    const faces = dado.children;
    const resultado = Math.floor(Math.random() * faces.length); // Escolhe um número entre 0 e o número de faces
    alert(`O resultado do dado ${id} foi: ${faces[resultado].innerText}`);
}



function rolarDado(dadoId) {
    const dado = document.getElementById(dadoId);

    // Gerar um valor aleatório entre 1 e 6
    const numero = Math.floor(Math.random() * 6) + 1;

    // Definir a rotação correta para a face exibindo o número
    let rotationX = 0;
    let rotationY = 0;

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
            rotationY = 270;
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

    // Resetar o dado para a posição inicial
    dado.style.transition = 'none'; // Remover transição para reiniciar rotação instantaneamente
    dado.style.transform = `rotateX(0deg) rotateY(0deg)`; // Reseta para a posição inicial

    // Forçar a reanimação com a rotação final (sem transição)
    setTimeout(() => {
        dado.style.transition = 'transform 0.6s'; // Aplicar novamente a transição suave
        dado.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`; // Gira o dado de forma controlada
    }, 10);
}
