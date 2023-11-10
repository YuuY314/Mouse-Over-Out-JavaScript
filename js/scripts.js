const mainContainer = document.querySelector("#over-out");

mainContainer.addEventListener("mouseover", (e) => {
    mainContainer.textContent = "Seu mouse está em cima do quadrado vermelho";
});

mainContainer.addEventListener("mouseout", (e) => {
    mainContainer.textContent = "Seu mouse está fora do quadrado vermelho";
});