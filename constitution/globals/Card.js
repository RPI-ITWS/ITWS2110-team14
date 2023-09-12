// Card.js
class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._width = '150px';
    this._height = '200px';
    this._padding = "16px";
    this._margin = "16px";
    this._backgroundColor = 'rgb(82, 68, 57)';
    this._shadow = false;

    this.render();
  }

  static get observedAttributes() {
    return ['width', 'height', 'background-color', 'shadow'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    'width' ? this._width = newVal : null;
    'height' ? this._height = newVal : null;
    'padding' ? this._padding = newVal : null;
    'margin' ? this._margin = newVal : null;
    'background-color' ? this._backgroundColor = newVal : null;
    'shadow' ? this._shadow = newVal : null;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML =
      `
      <style>
        :host {
          display: inline-block;
          width: ${this._width};
          height: ${this._height};
          padding: ${this._padding};
          margin: ${this._margin};
          overflow: hidden;
          background-color: ${this._backgroundColor};
          border-radius: 10px;
          transition: box-shadow 0.3s;
        }

        /* Show shadow when hovering */
        :host(:hover) {
          box-shadow: ${this._shadow ? 'rgba(0, 0, 0, 0.5) 0px 4px 8px 0px' : 'none'};
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('custom-card', Card);
