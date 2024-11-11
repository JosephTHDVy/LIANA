
// Seleciona elementos da galeria e o overlay
const galleryItems = document.querySelectorAll(".gallery-item");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlay-image");
const overlayText = document.getElementById("overlay-text");

// Configura o evento de clique para exibir o overlay
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    const imgText = item.getAttribute("data-text");
    
    // Define a imagem e o texto no overlay
    overlayImage.src = imgSrc;
    overlayText.textContent = imgText;
    
    // Exibe o overlay
    overlay.style.display = "flex";
  });
});

// Fecha o overlay ao clicar fora da imagem
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
