// Card.js
class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._width = '400px';
    this._height = '250px';
    this._padding = "16px";
    this._margin = "16px";
    this._backgroundColor = 'rgb(82, 68, 57)';
    this._shadow = false;

    this.render();
  }

  static get observedAttributes() {
    return ['width', 'height', 'padding', 'margin', 'background-color', 'shadow'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this._width = name === 'width' ? newVal : this._width;
    this._height = name === 'height' ? newVal : this._height;
    this._padding = name === 'padding' ? newVal : this._padding;
    this._margin = name === 'margin' ? newVal : this._margin;
    this._backgroundColor = name === 'background-color' ? newVal : this._backgroundColor;
    this._shadow = name === 'shadow' ? newVal : this._shadow;
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
