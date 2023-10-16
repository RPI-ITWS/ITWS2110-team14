// button-animation.js

const card = document.getElementById('card');
const loginButton = document.getElementById('loginButton');
const rightHand2 = document.getElementById('rightHand2');
const leftHands = document.getElementById('leftHands');
const rightHand1 = document.getElementById('rightHand1');

// Animation on card hover
card.addEventListener('mouseenter', () => {
  card.style.boxShadow = '0px 6px 20px rgba(0, 0, 0, 0.2)';
  rightHand2.style.transform = 'rotate(-10deg)';
  rightHand2.style.left = '60.5%';
  leftHands.style.transform = 'rotate(10deg)';
  leftHands.style.left = '17%';
  rightHand1.style.transform = 'rotate(-10deg)';
  rightHand1.style.left = '59%';
});

card.addEventListener('mouseleave', () => {
  card.style.boxShadow = 'none';
  rightHand2.style.transform = 'rotate(0deg)';
  rightHand2.style.left = '61%';
  leftHands.style.transform = 'rotate(0deg)';
  leftHands.style.left = '5%';
  rightHand1.style.transform = 'rotate(0deg)';
  rightHand1.style.left = '60%';
});

// Ripple effect for login button
function createRippleOnButton(func, targetButton) {
  let ripple = document.createElement('span');
  ripple.classList.add('ripple');
    
  let rect = targetButton.getBoundingClientRect();
  let size = Math.max(rect.width, rect.height);
  let left = func.clientX - rect.left - size / 2;
  let top = func.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = left + 'px';
  ripple.style.top = top + 'px';

  targetButton.appendChild(ripple);
  ripple.addEventListener('animationend', function () {
    ripple.remove();
  });
}

document.getElementById('loginButton').addEventListener('click', function (func) {
  createRippleOnButton(func, this);
});

document.getElementById('loginButtonImg').addEventListener('click', function (func) {
  const loginButton = document.getElementById('loginButton');
  createRippleOnButton(func, loginButton);
});

// Login action
loginButton.addEventListener('click', () => {
  console.log("Login clicked")
});