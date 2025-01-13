document.addEventListener("DOMContentLoaded", () => {
    carregarMetas();
    carregarMetasConcluidas();
});

// Função para adicionar uma nova meta
function adicionarMeta() {
    const nome = document.getElementById("nomeMeta").value;
    const descricao = document.getElementById("descricaoMeta").value;
    const dataInicio = document.getElementById("dataInicioMeta").value;
    const dataFim = document.getElementById("dataFimMeta").value;

    if (nome && descricao && dataInicio && dataFim) {
        const metas = obterMetas();
        metas.push({ nome, descricao, dataInicio, dataFim, concluida: false });
        salvarMetas(metas);
        document.getElementById("nomeMeta").value = '';  // Limpa o input
        document.getElementById("descricaoMeta").value = '';  // Limpa o input
        document.getElementById("dataInicioMeta").value = '';  // Limpa o input
        document.getElementById("dataFimMeta").value = '';  // Limpa o input
        carregarMetas();
    }
}

// Função para carregar as metas
function carregarMetas() {
    const metas = obterMetas();
    const tabelaMetas = document.getElementById("tabelaMetas").getElementsByTagName("tbody")[0];
    tabelaMetas.innerHTML = ''; // Limpa a tabela antes de preencher

    metas.forEach((meta, index) => {
        const row = tabelaMetas.insertRow();
        const cellNome = row.insertCell(0);
        const cellDescricao = row.insertCell(1);
        const cellDataInicio = row.insertCell(2);
        const cellDataFim = row.insertCell(3);
        const cellAcoes = row.insertCell(4);

        cellNome.textContent = meta.nome;
        cellDescricao.textContent = meta.descricao;
        cellDataInicio.textContent = meta.dataInicio;
        cellDataFim.textContent = meta.dataFim;

        // Botões de ação
        cellAcoes.innerHTML = `
            <button onclick="editarMeta(${index})">Editar</button>
            <button onclick="excluirMeta(${index})">Excluir</button>
            <button onclick="marcarComoConcluida(${index})">Marcar como Concluída</button>
        `;
    });

    // Exibe a tabela de metas se houver pelo menos uma meta
    document.getElementById("tabelaMetas").style.display = metas.length > 0 ? "block" : "none";
}

// Função para carregar as metas concluídas
function carregarMetasConcluidas() {
    const metasConcluidas = obterMetasConcluidas();
    const tabelaConcluidas = document.getElementById("tabelaConcluidas").getElementsByTagName("tbody")[0];
    tabelaConcluidas.innerHTML = ''; // Limpa a tabela antes de preencher

    metasConcluidas.forEach((meta, index) => {
        const row = tabelaConcluidas.insertRow();
        const cellNome = row.insertCell(0);
        const cellDataConclusao = row.insertCell(1);
        const cellAcoes = row.insertCell(2);

        cellNome.textContent = meta.nome;
        cellDataConclusao.textContent = meta.dataConclusao;

        // Botões de ação
        cellAcoes.innerHTML = `
            <button onclick="removerMetaConcluida(${index})">Remover</button>
        `;
    });

    // Exibe a tabela de metas concluídas se houver ao menos uma meta
    document.getElementById("tabelaConcluidas").style.display = metasConcluidas.length > 0 ? "block" : "none";
    document.getElementById("concluidasTitulo").style.display = metasConcluidas.length > 0 ? "block" : "none";
}

// Função para editar uma meta
function editarMeta(index) {
    const metas = obterMetas();
    const meta = metas[index];
    
    // Atualiza os campos para editar
    document.getElementById("nomeMeta").value = meta.nome;
    document.getElementById("descricaoMeta").value = meta.descricao;
    document.getElementById("dataInicioMeta").value = meta.dataInicio;
    document.getElementById("dataFimMeta").value = meta.dataFim;

    // Remove a meta para ser atualizada
    excluirMeta(index);
}

// Função para excluir uma meta
function excluirMeta(index) {
    const metas = obterMetas();
    metas.splice(index, 1);
    salvarMetas(metas);
    carregarMetas();
}

// Função para marcar a meta como concluída
function marcarComoConcluida(index) {
    const metas = obterMetas();
    const metaConcluida = metas.splice(index, 1)[0];
    metaConcluida.concluida = true;
    metaConcluida.dataConclusao = new Date().toLocaleDateString(); // Define a data de conclusão

    // Adiciona na lista de metas concluídas
    const metasConcluidas = obterMetasConcluidas();
    metasConcluidas.push(metaConcluida);

    salvarMetas(metas);
    salvarMetasConcluidas(metasConcluidas);
    carregarMetas();
    carregarMetasConcluidas();
}

// Função para remover meta da lista de concluídas
function removerMetaConcluida(index) {
    const metasConcluidas = obterMetasConcluidas();
    metasConcluidas.splice(index, 1);
    salvarMetasConcluidas(metasConcluidas);
    carregarMetasConcluidas();
}

// Função para obter metas do localStorage
function obterMetas() {
    const metas = localStorage.getItem("metas");
    return metas ? JSON.parse(metas) : [];
}

// Função para salvar metas no localStorage
function salvarMetas(metas) {
    localStorage.setItem("metas", JSON.stringify(metas));
}

// Função para obter metas concluídas do localStorage
function obterMetasConcluidas() {
    const metasConcluidas = localStorage.getItem("metasConcluidas");
    return metasConcluidas ? JSON.parse(metasConcluidas) : [];
}

// Função para salvar metas concluídas no localStorage
function salvarMetasConcluidas(metasConcluidas) {
    localStorage.setItem("metasConcluidas", JSON.stringify(metasConcluidas));
}
