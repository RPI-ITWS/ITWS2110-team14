// navbar.js

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Import navbar-inner.html content
    fetch("/RPM/globals/components/navbar/navbar-inner.html")
      .then(response => response.text())
      .then(content => {
        this.innerHTML = `
          ${content}
        `;
      });
  }
}

window.addEventListener('load', function() {
  let checkCount = 0;

  let pathName = new URL(window.location.href).pathname;
    // Remove extras like "index.html" at the end of the url
    if (/\/[^/]+\.[^/]+$/.test(pathName)) {
    pathName = pathName.substring(0, pathName.lastIndexOf('/') + 1);
  }

  function showUserInfo() {
    if (pathName === "/RPM/") {
      return;
    }
    const userInfoElement = document.querySelector('#userInfo');
    const listingsElement = document.querySelector('#listings')
    const postElement = document.querySelector('#post')
    if (userInfoElement) {
      userInfoElement.style.display = 'block';
      listingsElement.style.display = 'block';
      postElement.style.display = 'block';
      clearInterval(intervalID);
    }
    else {
      checkCount++;
      if (checkCount >= 300) {
        console.error("Element #userInfo not found after 30 seconds.");
        clearInterval(intervalID);
      }
    }
  }
  const intervalID = setInterval(showUserInfo, 100);
});

customElements.define('navbar-component', NavBar);