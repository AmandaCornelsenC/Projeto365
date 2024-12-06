// Variáveis Globais
const tabuleiro = document.getElementById('tabuleiro');
const resultadoDado = document.getElementById('resultadoDado');
const statusJogador = document.getElementById('statusJogador');
const cartaAcao = document.getElementById('cartaAcao');
const textoCarta = document.getElementById('textoCarta');
const iniciarJogoBtn = document.getElementById('iniciarJogoBtn');
const esconderJogoBtn = document.getElementById('esconderJogoBtn');
const controles = document.querySelector('.controles');
const acoes = document.getElementById('acoes');
const fazerBtn = document.getElementById('fazer');
const desistirBtn = document.getElementById('desistir');

let jogador1Posicao = 0;
let jogador2Posicao = 0;
let vezDoJogador1 = true;
let casaAtual = -1; // Controle da casa em que o jogador caiu

// Cartas de ação e perguntas
const cartas = [
    "Conte um segredo para o outro jogador!",
    "Dê um beijo no outro jogador!",
    "Faça o outro jogador retirar uma peça de roupa de sua escolha!",
    "Fale algo ousado para o outro jogador!",
    "Pergunte algo íntimo para o outro jogador!",
    "Tire uma peça de roupa!",
    "Sussurre algo instigante no ouvido do parceiro",
    "Tire uma peça de roupa do outro jogador",
    "Beije o pescoço do seu parceiro por 30 segundos",
    "Escolha uma região do corpo do seu parceiro para fazer o que quiser por 15 segundos"
];

const perguntas = [
    "Qual é a parte mais sensível do seu corpo?",
    "Qual é seu maior desejo secreto?",
    "Você já fez algo em público?",
    "Qual é a sua fantasia mais ousada?",
    "Já se arrependeu de algo que fez com o parceiro?",
    "Qual parte do corpo do parceiro você mais gosta?",
    "Qual é a lembrança mais quente que vocÊ tem de nós dois?",
    "Se tivéssemos uma noite sem limites, o que faria comigo?",
    "Se eu te deixasse escolher algo para fazer comigo, o que seria?"
];

// Função para iniciar o jogo
function iniciarJogo() {
    // Esconde o botão de iniciar e exibe o tabuleiro e controles
    iniciarJogoBtn.style.display = 'none';
    tabuleiro.style.display = 'grid';
    controles.style.display = 'block';
    esconderJogoBtn.style.display = 'inline-block';

    // Resetando o tabuleiro antes de criar um novo
    tabuleiro.innerHTML = '';  // Limpa o conteúdo do tabuleiro

    // Criar o tabuleiro com 25 casas, garantindo 3 casas azuis e 3 vermelhas
    let casasAzuis = 0;
    let casasVermelhas = 0;

    // Inicializa 25 casas com cor padrão (branca)
    for (let i = 0; i < 25; i++) {
        const casa = document.createElement('div');
        casa.classList.add('casa');
        casa.id = `casa-${i}`;

        // Adiciona casas azuis e vermelhas aleatoriamente
        if (casasAzuis < 5 && Math.random() < 0.12) {
            casa.classList.add('azul');
            casasAzuis++;
        } else if (casasVermelhas < 5 && Math.random() < 0.12) {
            casa.classList.add('vermelha');
            casasVermelhas++;
        }

        // Adiciona a casa ao tabuleiro
        tabuleiro.appendChild(casa);
    }

    // Cria os pinos dos jogadores nas casas iniciais
    const jogador1 = document.createElement('div');
    jogador1.id = 'jogador1';
    jogador1.classList.add('jogador');
    jogador1.style.backgroundColor = 'yellow'; // Pino amarelo para Jogador 1
    document.getElementById('casa-0').appendChild(jogador1);

    const jogador2 = document.createElement('div');
    jogador2.id = 'jogador2';
    jogador2.classList.add('jogador');
    jogador2.style.backgroundColor = 'grey'; // Pino cinza para Jogador 2
    document.getElementById('casa-0').appendChild(jogador2);

    // Reiniciar posições dos jogadores
    jogador1Posicao = 0;
    jogador2Posicao = 0;
    vezDoJogador1 = true;
    statusJogador.textContent = 'Vez do Jogador 1'; // Iniciar com o Jogador 1
}


// Função para rolar o dado
function rolarDado() {
    const dado = Math.floor(Math.random() * 6) + 1;
    resultadoDado.textContent = `Número do dado: ${dado}`;

    if (vezDoJogador1) {
        moverJogador(dado, 1);
    } else {
        moverJogador(dado, 2);
    }
}

// Função para mover o jogador
function moverJogador(dado, jogador) {
    let posicaoAtual = jogador === 1 ? jogador1Posicao : jogador2Posicao;
    let novaPosicao = posicaoAtual + dado;

    if (novaPosicao >= 25) {
        novaPosicao = 25;
        alert(`Jogador ${jogador} venceu!`);
        reiniciarJogo();
        return;
    }

    // Atualiza a posição do jogador
    const peca = jogador === 1 ? document.getElementById('jogador1') : document.getElementById('jogador2');
    document.getElementById(`casa-${posicaoAtual}`).removeChild(peca);
    document.getElementById(`casa-${novaPosicao}`).appendChild(peca);

    if (jogador === 1) {
        jogador1Posicao = novaPosicao;
    } else {
        jogador2Posicao = novaPosicao;
    }

    // Verifica se caiu em uma casa de ação ou pergunta
    casaAtual = novaPosicao;
    if (document.getElementById(`casa-${novaPosicao}`).classList.contains('azul') || document.getElementById(`casa-${novaPosicao}`).classList.contains('vermelha')) {
        acoes.style.display = 'block';
    }

    // Alterna a vez entre os jogadores
    vezDoJogador1 = !vezDoJogador1;
    statusJogador.textContent = vezDoJogador1 ? 'Vez do Jogador 1' : 'Vez do Jogador 2';
}

// Função para exibir carta de ação ou pergunta
function mostrarCarta() {
    let carta;
    if (document.getElementById(`casa-${casaAtual}`).classList.contains('azul')) {
        carta = cartas[Math.floor(Math.random() * cartas.length)];
    } else if (document.getElementById(`casa-${casaAtual}`).classList.contains('vermelha')) {
        carta = perguntas[Math.floor(Math.random() * perguntas.length)];
    }

    textoCarta.textContent = carta;
    cartaAcao.style.display = 'block';
}

// Função para a ação "Fazer"
function fazerAcao() {
    cartaAcao.style.display = 'none';
    acoes.style.display = 'none';
    mostrarCarta();
}

// Função para a ação "Desistir"
function desistirAcao() {
    acoes.style.display = 'none';
    const peca = vezDoJogador1 ? document.getElementById('jogador1') : document.getElementById('jogador2');
    let novaPosicao = vezDoJogador1 ? jogador1Posicao - 2 : jogador2Posicao - 2;
    novaPosicao = novaPosicao < 0 ? 0 : novaPosicao;

    document.getElementById(`casa-${casaAtual}`).removeChild(peca);
    document.getElementById(`casa-${novaPosicao}`).appendChild(peca);

    if (vezDoJogador1) {
        jogador1Posicao = novaPosicao;
    } else {
        jogador2Posicao = novaPosicao;
    }
}

// Função para fechar a carta de ação
function fecharCarta() {
    cartaAcao.style.display = 'none';
}

// Função para esconder o jogo
function esconderJogo() {
    tabuleiro.style.display = 'none';
    controles.style.display = 'none';
    esconderJogoBtn.style.display = 'none';
    iniciarJogoBtn.style.display = 'inline-block';
}
