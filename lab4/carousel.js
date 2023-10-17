// JavaScript code to start the carousel
const carousel = document.querySelector('.carousel');

function resetCarousel() {
  const firstItem = carousel.firstElementChild;
  carousel.appendChild(firstItem);
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(0)';
  setTimeout(() => {
    carousel.style.transition = 'transform 20s linear infinite'; // Adjust the animation duration as needed
  });
}

// Reset the carousel when the page loads
resetCarousel();

// Listen for the transitionend event to reset the carousel
carousel.addEventListener('transitionend', resetCarousel);
