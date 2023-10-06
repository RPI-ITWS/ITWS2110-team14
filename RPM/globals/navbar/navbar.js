// navbar.js

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Import navbar-inner.html content
    fetch('globals/navbar/navbar-inner.html')
      .then(response => response.text())
      .then(content => {
        this.innerHTML = `
          ${content}
        `;
      });
  }
}

customElements.define('navbar-component', NavBar);