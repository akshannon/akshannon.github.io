const carousel = document.querySelector(".project-carousel");
const carouselButtons = document.querySelectorAll(".carousel-button");

if (carousel && carouselButtons.length) {
    const updateCarouselButtons = () => {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        carouselButtons.forEach((button) => {
            const direction = Number(button.dataset.direction);
            button.disabled = direction < 0
                ? carousel.scrollLeft <= 0
                : carousel.scrollLeft >= maxScrollLeft - 1;
        });
    };

    carouselButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = carousel.querySelector(".project-card");
            if (!card) return;

            const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
            carousel.scrollBy({
                left: Number(button.dataset.direction) * (card.offsetWidth + gap),
                behavior: "smooth",
            });
        });
    });

    carousel.addEventListener("scroll", updateCarouselButtons);
    window.addEventListener("resize", updateCarouselButtons);
    updateCarouselButtons();
}
