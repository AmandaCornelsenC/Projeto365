// Data de início
let dataInicio = new Date("2024-01-17T00:00:00");

setInterval(() => {
    let agora = new Date();
    let diferença = agora - dataInicio; // Diferença em milissegundos

    // Cálculos de anos, meses, semanas, dias, horas, minutos, segundos e milissegundos
    const milissegundos = diferença % 1000;
    const segundos = Math.floor(diferença / 1000) % 60;
    const minutos = Math.floor(diferença / (1000 * 60)) % 60;
    const horas = Math.floor(diferença / (1000 * 60 * 60)) % 24;
    const diasTotais = Math.floor(diferença / (1000 * 60 * 60 * 24));

    // Cálculo de anos e meses
    const anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth() + (12 * anos); // Calculando o número total de meses
    let mesesCorrigidos = meses % 12; // Ajustando para que o número de meses não ultrapasse 12

    // Cálculo de semanas e dias restantes após contar as semanas
    const semanasTotais = Math.floor(diasTotais / 7);  // Contando semanas completas
    const dias = diasTotais % 7; // Dias restantes após calcular as semanas

    // Atualiza os elementos no HTML
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = mesesCorrigidos;
    document.getElementById("semanas").textContent = semanasTotais;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    document.getElementById("milissegundos").textContent = milissegundos;
}, 1000);  // Atualiza a cada segundo


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
