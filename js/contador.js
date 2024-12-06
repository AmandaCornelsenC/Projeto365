let dataAlvo = new Date ("2024-01-17T16:00:00")

setInterval(() => {
    let agora = new Date();
    let diferença = agora - dataAlvo;

    // Cálculo dos valores
    const milissegundos = diferença % 1000;
    const segundos = Math.floor(diferença / 1000) % 60;
    const minutos = Math.floor(diferença / (1000 * 60)) % 60;
    const horas = Math.floor(diferença / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferença / (1000 * 60 * 60 * 24)) % 7;
    const semanas = Math.floor(diferença / (1000 * 60 * 60 * 24 * 7)) % 4;
    const meses = Math.floor(diferença / (1000 * 60 * 60 * 24 * 30.44)) % 12; // Aproximação de um mês
    const anos = Math.floor(diferença / (1000 * 60 * 60 * 24 * 365.25)); // Aproximação de um ano

    // Atualiza o conteúdo de cada elemento
    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("semanas").textContent = semanas;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
    document.getElementById("milissegundos").textContent = milissegundos;
}, 1000);

let dataNamoro = new Date ("2024-08-17T21:45:00")

setInterval(() => {
    let hoje = new Date();
    let diferença = hoje - dataNamoro;

    // Cálculo dos valores
    const diasNamoro = Math.floor(diferença / (1000 * 60 * 60 * 24)) % 7;
    const semanasNamoro = Math.floor(diferença / (1000 * 60 * 60 * 24 * 7)) % 4;
    const mesesNamoro = Math.floor(diferença / (1000 * 60 * 60 * 24 * 30.44)) % 12; // Aproximação de um mês

    // Atualiza o conteúdo de cada elemento
    document.getElementById("meses-namoro").textContent = mesesNamoro;
    document.getElementById("semanas-namoro").textContent = semanasNamoro;
    document.getElementById("dias-namoro").textContent = diasNamoro;
}, 1000);
