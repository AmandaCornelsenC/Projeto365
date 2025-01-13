// Listas de perguntas e desafios
const verdades = [
    "Qual é o seu maior medo?",
    "Qual foi o momento mais embaraçoso da sua vida?",
    "Se você pudesse mudar algo em si, o que seria?",
    "Qual é o seu maior segredo?",
    "Já se apaixonou à primeira vista?",
    "Qual é sua maior fantasia que ainda não realizamos juntos?",
    "Existe algo que vocÊ sempre quis tentar na cama, mas nunca teve coragem de pedir?",
    "Se pudesse escolher um lugar inusitado para ficarmos juntos, qual seria?",
    "O que mais te excita em mim?",
    "Tem alguma verdade que você nunca teve coragem de me dizer?",
    "Para você, qual foi o momento mais sensual que tivemos juntos?",
    "Se pudesse mudar algo na nossa vida íntima, o que seria?",
    "VocÊ já fingiu gostar de algo só pra me agradar? O que foi?",
    "Já teve algum sonho picante comigo? Como foi",
    "Alguma vez, já pensou em outra pessoa enquanto estávamos juntos?",
    "Qual foi o momento em que mais sentiu desejo por mim?",
    "Se eu deixasse você escolher qualquer coisa para fazermos hoje, o que você escolheria?"
];

const desafios = [
    "Dê um beijo na bochecha do seu parceiro.",
    "Faça uma declaração de amor.",
    "Faça massagem nas costas do seu parceiro por 2 minutos",
    "Beije uma parte do corpo de seu parceiro que nunca beijou antes",
    "Dê um beijo de cinema em seu parceiro",
    "Use gelo ou algo gelado em alguma parte do corpo de seu parceiro em uma área de sua escolha",
    "Tente seduzir seu parceiro por 1 minuto sem falar",
    "Sussurre algo provocante no ouvido de seu parceiro",
    "Provoque seu parceiro por 2 minutos sem deixá-lo te beijar",
    "Beije o pescoço de seu parceiro por 30 segundos sem parar",
    "Fique a menos de 5 cm de seu parceiro sem tocá-lo por 1 minuto",
    "Sente no colo de seu parceiro e o instigue sem deixá-lo beijar você",
    "Utilize algo comestível para criar um momento sensual",
    "Escolha uma posição inusitada para dar um beijo em seu parceiro",
    "Tire uma peça de roupa",
    "Seu parceiro escolherá o desafio",
    ""
];

// Função para exibir o jogo
function mostrarVerdadeOuDesafio() {
    document.getElementById('verdadeDesafioContainer').style.display = 'block';
    document.getElementById('botaoIniciar').style.display = 'none';
}
function esconderVerdadeOuDesafio() {
    document.getElementById('verdadeDesafioContainer').style.display = 'none';
    document.getElementById('botaoIniciar').style.display = 'inline-block';
}

// Função para escolher "Verdade" ou "Desafio"
function escolherVerdadeOuDesafio() {
    const escolha = Math.random() < 0.5 ? 'Verdade' : 'Desafio';
    const resultadoEscolha = document.getElementById('resultadoEscolha');
    const tarefaTexto = document.getElementById('tarefaTexto');
    const tarefaContainer = document.getElementById('tarefaContainer');

    resultadoEscolha.textContent = `Você escolheu: ${escolha}`;

    // Seleciona uma tarefa aleatória
    let tarefa;
    if (escolha === 'Verdade') {
        tarefa = verdades[Math.floor(Math.random() * verdades.length)];
    } else {
        tarefa = desafios[Math.floor(Math.random() * desafios.length)];
    }

    // Exibe a tarefa
    tarefaTexto.textContent = tarefa;
    tarefaContainer.style.display = 'block';
}

// Função para começar uma nova rodada
function proximaRodada() {
    document.getElementById('resultadoEscolha').textContent = '';
    document.getElementById('tarefaTexto').textContent = '';
    document.getElementById('tarefaContainer').style.display = 'none';
}
