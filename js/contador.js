// Define a data alvo para 17 de janeiro de 2025, às 00h// Define a data alvo para 17 de janeiro de 2025, às 00h
let dataAlvo = new Date("2024-01-17T00:00:00");

setInterval(() => {
    let agora = new Date();
    let diferença = dataAlvo - agora;

    // Garante que a diferença não seja negativa (após passar da data alvo)
    if (diferença < 0) {
        diferença = 0;
    }

    // Calcula os valores de milissegundos, segundos, minutos e horas
    const milissegundos = diferença % 1000;
    const totalSegundos = Math.floor(diferença / 1000);
    const segundos = totalSegundos % 60;
    const totalMinutos = Math.floor(totalSegundos / 60);
    const minutos = totalMinutos % 60;
    const totalHoras = Math.floor(totalMinutos / 60);
    const horas = totalHoras % 24;

    // Calcula dias, meses e anos manualmente
    const dataAtual = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
    const anos = dataAlvo.getFullYear() - agora.getFullYear();

    // Ajusta meses e dias
    let meses = dataAlvo.getMonth() - agora.getMonth();
    let dias = dataAlvo.getDate() - agora.getDate();

    if (dias < 0) {
        meses -= 1;
        const ultimoDiaMesAtual = new Date(agora.getFullYear(), agora.getMonth() + 1, 0).getDate();
        dias += ultimoDiaMesAtual;
    }

    if (meses < 0) {
        meses += 12;
    }

    // Atualiza os valores no HTML
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
