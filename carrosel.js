let currentIndex = 0;
const itemsPerPage = 3; 
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.org1');
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 20; // largura + margem

function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function moveCarousel(direction) {
    currentIndex += direction;
    
    // Verifica os limites
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - itemsPerPage) {
        currentIndex = totalItems - itemsPerPage;
    }
    
    updateCarousel();
}

// Inicializa o carrossel
updateCarousel();