// Card.js component
class Card extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({
          mode: "open"
      });

      this._width = "700px";
      this._height = "350px";
      this._padding = "16px";
      this._margin = "16px";
      this._position = "static";
      this._float = "left";
      this._top = "0px";
      this._right = "0px";
      this._bottom = "0px";
      this._left = "0px";
      this._backgroundColor = "#ffeace";
      this._shadow = true;

      this.render();
  }

  static get observedAttributes() {
      return [
          "width",
          "height",
          "padding",
          "float",
          "margin",
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "background-color",
          "shadow",
      ];
  }

  attributeChangedCallback(rawName, oldVal, newVal) {
      const name = rawName.toLowerCase();
      this[`_${name}`] = newVal !== null ? newVal : this[`_${name}`];
      this.render();
  }

  render() {
      this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: inline-block;
        width: ${this._width};
        padding: ${this._padding};
        margin: ${this._margin};
        position: ${this._position};
        float: ${this._float};
        top: ${this._top};
        right: ${this._right};
        bottom: ${this._bottom};
        left: ${this._left};
        overflow: hidden;
        background-color: ${this._backgroundColor};
        border-radius: 10px;
        outline: 1px solid tan;
        transition: box-shadow 0.3s;
      }

      /* Show shadow when hovering */
      :host(:hover) {
        box-shadow: ${
          this._shadow ? "rgba(0, 0, 0, 0.5) 0px 4px 8px 0px" : "none"
        };
      }
    </style>
    <slot></slot>
  `;
  }
}

customElements.define("custom-card", Card);