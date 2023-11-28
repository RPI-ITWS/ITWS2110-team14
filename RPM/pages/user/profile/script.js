// script.js

const card = document.getElementById('card');
const loginButton = document.getElementById('loginButton');
const rightHand2 = document.getElementById('rightHand2');
const leftHands = document.getElementById('leftHands');
const rightHand1 = document.getElementById('rightHand1');
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
  if (!initial) {
    rect.style.opacity = `1`;
  }

  bgContainer.appendChild(rect);
  rect.addEventListener("animationend", () => {
    rect.remove();
  });
}

// Reset background animation when page focused
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    while (bgContainer.firstChild) {
      bgContainer.removeChild(bgContainer.firstChild);
    }
    for (let i = 0; i < 200; i++) {
      createRectangle(Math.random() * 250 - 50, false);
    }
  }
});

// Login action
loginButton.addEventListener('click', () => {
  setTimeout(function() {
    console.log("Login clicked, redirecting")
    window.location.href = "/RPM/pages/marketplace/";
  }, 1000);
});

/* Continuous actions */
for (let i = 0; i < 200; i++) {
  createRectangle(Math.random() * 250 - 50, true);
}

let lastTime = 0;
const interval = 70;
function createRectangles() {
  const currentTime = Date.now();
  if (currentTime - lastTime >= interval) {
    createRectangle(-50, false);
    lastTime = currentTime;
  }
  requestAnimationFrame(createRectangles);
}
createRectangles();

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