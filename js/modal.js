// Função para abrir a modal
function openModal(modalId) {
    // Exibe a modal específica
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";  // Torna a modal visível
    }
}

// Função para fechar a modal
function closeModal(modalId) {
    // Fecha a modal específica
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";  // Torna a modal invisível
    }
}

// Funções para associar os cliques nas divs com as modais
document.querySelector(".primeira-noite").addEventListener("click", function() {
    openModal("modal-primeiraNoite");
});

document.querySelector(".show-luan").addEventListener("click", function() {
    openModal("modal-showLuan");
});

document.querySelector(".pedido-namoro").addEventListener("click", function() {
    openModal("modal-pedidoNamoro");
});

// Fechar as modais quando clicar no "X"
document.querySelectorAll(".close").forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
        const modalId = closeButton.closest(".modal").id;
        closeModal(modalId);
    });
});

// Fechar as modais se o usuário clicar fora da modal
window.addEventListener("click", function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

