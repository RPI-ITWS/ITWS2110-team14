// script.js

const card = document.getElementById("card");
const loginButton = document.getElementById("loginButton");
const rightHand2 = document.getElementById("rightHand2");
const leftHands = document.getElementById("leftHands");
const rightHand1 = document.getElementById("rightHand1");
const bgContainer = document.querySelector(".animated-bg");
const userInfo = document.getElementById("userInfo");

// Background animation
function createRectangle(left, initial = false) {
  const rect = document.createElement("div");

  rect.classList.add("moving-rectangle");
  rect.style.top = `${Math.random() * 100}vh`;
  rect.style.left = `${left}vh`;
  rect.style.backgroundColor = `rgba(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255}, 0.1)`;
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
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    while (bgContainer.firstChild) {
      bgContainer.removeChild(bgContainer.firstChild);
    }
    for (let i = 0; i < 200; i++) {
      createRectangle(Math.random() * 250 - 50, false);
    }
  }
});

// Animation on button hover
loginButton.addEventListener("mouseenter", () => {
  rightHand2.style.transform = "rotate(-10deg)";
  rightHand2.style.left = "60.5%";
  leftHands.style.transform = "rotate(10deg)";
  leftHands.style.left = "17%";
  rightHand1.style.transform = "rotate(-10deg)";
  rightHand1.style.left = "56%";
});

loginButton.addEventListener("mouseleave", () => {
  rightHand2.style.transform = "rotate(0deg)";
  rightHand2.style.left = "61%";
  leftHands.style.transform = "rotate(0deg)";
  leftHands.style.left = "5%";
  rightHand1.style.transform = "rotate(0deg)";
  rightHand1.style.left = "60%";
});

// Ripple effect for buttons
function createRippleOnButton(func, targetButton) {
  let ripple = document.createElement("span");
  ripple.classList.add("ripple");

  let rect = targetButton.getBoundingClientRect();
  let size = Math.max(rect.width, rect.height);
  let left = func.clientX - rect.left - size / 2;
  let top = func.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = left + "px";
  ripple.style.top = top + "px";

  targetButton.appendChild(ripple);
  ripple.addEventListener("animationend", function () {
    ripple.remove();
  });
}

// Login action
loginButton.addEventListener("click", () => {
  setTimeout(function () {
    console.log("Login clicked, redirecting");
    //check to see if the user is logged in
    fetch("/RPM/globals/components/navbar/check_login.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Logged in as " + data.rcs_id);
      console.log("Logged in: " + data.loggedin);
      if (data.loggedin) {
        // The user is logged in
        window.location.href = "/RPM/pages/marketplace";
      } else {
        window.location.href = "/RPM/pages/user/login";
      }
    });
  }, 1000);
});

// Continuous actions
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

document
  .getElementById("loginButton")
  .addEventListener("click", function (func) {
    createRippleOnButton(func, this);
  });

// Shadow on card hover
card.addEventListener("mouseenter", () => {
  card.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.2)";
});

card.addEventListener("mouseleave", () => {
  card.style.boxShadow = "none";
});

// On page load
window.addEventListener("load", function () {
  const card = document.getElementById("card");
  if (card) {
    card.style.opacity = "1";
  }
});

window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
