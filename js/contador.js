// Definir a data inicial
const startDate = new Date('2024-01-17T00:00:00');

// Função que atualiza o contador
function updateCounter() {
    const now = new Date();
    const diff = now - startDate; // Diferença em milissegundos

    // Calcular os anos
    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));

    // Calcular os meses de forma precisa
    const months = new Date(now - startDate).getMonth();

    // Calcular o número de dias totais
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));

    // Calcular as semanas
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;  // Dias restantes após calcular as semanas

    // Calcular horas, minutos, segundos e milissegundos
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);
    const milliseconds = diff % 1000;

    // Atualizar a interface
    document.getElementById('anos').textContent = years;
    document.getElementById('meses').textContent = months;
    document.getElementById('semanas').textContent = weeks;
    document.getElementById('dias').textContent = remainingDays;
    document.getElementById('horas').textContent = hours;
    document.getElementById('minutos').textContent = minutes;
    document.getElementById('segundos').textContent = seconds;
    document.getElementById('milissegundos').textContent = milliseconds;
}

// Atualizar o contador a cada milissegundo
setInterval(updateCounter, 1);


let dataNamoro = new Date("2024-08-17T00:00:00");

setInterval(() => {
    const agora = new Date();
    let diferença = agora - dataNamoro;

    // Calcula o número total de meses considerando anos e meses
    let mesesNamoro = agora.getMonth() - dataNamoro.getMonth() + 
                      (12 * (agora.getFullYear() - dataNamoro.getFullYear()));

    // Ajusta o cálculo de meses se ainda não atingiu o dia 17 às 00:00
    const dataAniversarioAtual = new Date(dataNamoro);
    dataAniversarioAtual.setMonth(dataNamoro.getMonth() + mesesNamoro);

    if (agora < dataAniversarioAtual) {
        mesesNamoro -= 1;
    }

    // Calcula os dias restantes após o último "aniversário" mensal
    let diasRestantes = Math.floor((agora - dataAniversarioAtual) / (1000 * 60 * 60 * 24));

    // Corrige para dias restantes se for negativo
    if (diasRestantes < 0) {
        diasRestantes = Math.abs(diasRestantes); // Torna positivo para somar
        const semanasRestantes = Math.floor(diasRestantes / 7);
        const diasParaSemanaCompleta = diasRestantes % 7;

        // Atualiza o conteúdo de cada elemento
        document.getElementById("meses-namoro").textContent = mesesNamoro;
        document.getElementById("semanas-namoro").textContent = 4 - semanasRestantes - 1; // Faltam semanas
        document.getElementById("dias-namoro").textContent = 7 - diasParaSemanaCompleta; // Dias para completar a semana
    } else {
        // Calcula semanas e dias restantes normalmente
        const semanasNamoro = Math.floor(diasRestantes / 7);
        const diasNamoro = diasRestantes % 7;

        // Atualiza o conteúdo de cada elemento
        document.getElementById("meses-namoro").textContent = mesesNamoro;
        document.getElementById("semanas-namoro").textContent = semanasNamoro;
        document.getElementById("dias-namoro").textContent = diasNamoro;
    }
}, 1000);
