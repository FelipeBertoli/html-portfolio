const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let itemsPerView = 3;

function updateCarousel() {
    const width = carousel.clientWidth / itemsPerView;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= carousel.children.length - itemsPerView;
}

function updateItemsPerView() {
    itemsPerView = window.innerWidth > 600 ? 3 : 1;
    updateCarousel();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - itemsPerView) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', updateItemsPerView);

updateItemsPerView();
