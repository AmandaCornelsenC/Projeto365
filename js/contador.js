// Define a data alvo para 17 de janeiro de 2025, às 00h
let dataAlvo = new Date("2025-01-17T00:00:00");

setInterval(() => {
    let agora = new Date();
    let diferença = dataAlvo - agora;

    // Garante que a diferença não seja negativa (após passar da data alvo)
    if (diferença < 0) {
        diferença = 0;
    }

    // Cálculo dos valores
    const milissegundos = diferença % 1000;
    const segundos = Math.floor(diferença / 1000) % 60;
    const minutos = Math.floor(diferença / (1000 * 60)) % 60;
    const horas = Math.floor(diferença / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferença / (1000 * 60 * 60 * 24)) % 30; // Aproximação de um mês
    const meses = Math.floor(diferença / (1000 * 60 * 60 * 24 * 30.44)) % 12; // Aproximação de meses
    const anos = Math.floor(diferença / (1000 * 60 * 60 * 24 * 365.25)); // Aproximação de anos

    // Atualiza o conteúdo de cada elemento no HTML
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    document.getElementById("milissegundos").textContent = milissegundos;
}, 1000);

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
