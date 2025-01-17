// Define a data inicial para 17 de janeiro de 2024, às 17h
let dataInicial = new Date("2024-01-17T00:00:00");

setInterval(() => {
    let agora = new Date();
    let diferença = agora - dataInicial; // Calcula o tempo que passou desde a data inicial

    // Calcula anos e meses
    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();

    // Ajusta anos e meses se necessário
    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    // Calcula os valores de milissegundos, segundos, minutos e horas
    const milissegundos = diferença % 1000;
    const totalSegundos = Math.floor(diferença / 1000);
    const segundos = totalSegundos % 60;
    const totalMinutos = Math.floor(totalSegundos / 60);
    const minutos = totalMinutos % 60;
    const totalHoras = Math.floor(totalMinutos / 60);
    const horas = totalHoras % 24;

    // Calcula o número total de dias passados
    const totalDias = Math.floor(diferença / (1000 * 60 * 60 * 24)); // Dias totais desde a data inicial

    // Calcula semanas e dias no ciclo especificado
    const semanas = Math.floor((totalDias % 28) / 7); // Ciclo de 4 semanas (28 dias)
    const dias = (totalDias % 7) + 1; // Dias no ciclo de 1 a 7

    // Atualiza os valores no HTML
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("semanas").textContent = semanas;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    document.getElementById("milissegundos").textContent = milissegundos;
}, 10); // Atualiza a cada 10ms para maior precisão visual


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
