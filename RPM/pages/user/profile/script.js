// script.js

const card = document.getElementById('card');
const bgContainer = document.querySelector(".animated-bg");
const userInfo = document.getElementById('userInfo');

// Background animation
function createRectangle(left, initial = false) {
  const rect = document.createElement("div");

  rect.classList.add("moving-rectangle");
  rect.style.top = `${Math.random() * 100}vh`;
  rect.style.left = `${left}vh`;
  rect.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
  rect.style.width = `${Math.random() * 200 + 25}px`;
  rect.style.height = `${Math.random() * 5 + 20}px`;
  rect.style.animationDuration = `${Math.random() * 10 + 10}s`;
  rect.style.opacity = `0`;

  bgContainer.appendChild(rect);
  rect.addEventListener("animationend", () => {
    rect.remove();
  });
}

// Shadow on card hover
card.addEventListener('mouseenter', () => {
  card.style.boxShadow = '0px 6px 20px rgba(0, 0, 0, 0.2)';
});

card.addEventListener('mouseleave', () => {
  card.style.boxShadow = 'none';
});


// Continuous actions
for (let i = 0; i < 200; i++) {
  createRectangle(Math.random() * 250 - 50, true);
}

setInterval(() => createRectangle(-50, false), 70);

// On page load
window.addEventListener('load', function() {
  const card = document.getElementById('card');
  if (card) {
    card.style.opacity = "1";
  }
});

window.addEventListener('wheel', function(e) {
    e.preventDefault();
}, { passive: false });