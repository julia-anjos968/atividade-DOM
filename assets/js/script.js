const botao = document.getElementById("botao-modos");
const body = document.body;

botao.addEventListener("click", () => {
    if (body.classList.contains("escuro")) {
        body.classList.replace("escuro", "claro");
        botao.textContent = "Ativar modo escuro";
    } else {
        body.classList.replace("claro", "escuro");
        botao.textContent = "Ativar modo claro";
    }
});