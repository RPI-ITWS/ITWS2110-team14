/*
This code will define the HTML necessary to display a listing on the marketplace/home page
 */

class Marketplace_Listings extends HTMLElement {
  constructor() {
    super();

    this._maxWidth = "381px"; //Numbers from Facebook Marketplace
    this._minWidth = "242px"; //Numbers from Facebook Marketplace
    this._height = "225px"; //Arbitrary
    this._padding = "5px";
    this._margin = "5px";
    this._position = "static";
    this._top = "0px";
    this._right = "0px";
    this._bottom = "0px";
    this._left = "0px";
    this._shadow = true;

    this.render();
  }

  connectedCallback() {
    const shadow = this.attachShadow({
      mode: "open",
    });

    //Holds all of elements
    const parentContainer = document.createElement("div");
    parentContainer.setAttribute("class", "parentContainer");

    //Image of product
    const productImageContainer = document.createElement("div");
    productImageContainer.setAttribute("class", "productImageContainer");

    let productImageURL;
    if (this.hasAttribute("img")) {
      productImageURL = this.getAttribute("img");
    } else {
      productImageURL = "../img/defaultProductImage.jpg";
    }

    //Add the image of the product to the respective container
    const productImage = document.createElement("img");
    productImage.src = productImageURL;
    productImageContainer.appendChild(productImage);

    //Price
    const priceContainer = document.createElement("span");
    priceContainer.setAttribute("class", "priceContainer");

    const priceText = this.getAttribute("data-text");
    priceContainer.textContent = "$" + priceText; //From database

    //Product
    const productContainer = document.createElement("span");
    productContainer.setAttribute("class", "productContainer");

    const productText = this.getAttribute("data-text");
    productContainer.textContent = productText; //From database

    //Styling of class attributes
    const style = document.createElement("style");
    console.log("Style is connected " + style.isConnected);

    style.textContent = `
      img {
         height: 242.67px;
         width: 242.67px;
      }

      .parentContainer {
         position: relative;
         font-family: "Segoe UI";
         font-size: 15px;
      }

      .priceContainer {
         font-size: 17px;
         font-weight: bold;
      }
    `;
  }

  static get observedAttributes() {
    return [
      "maxWidth",
      "minWidth",
      "height",
      "padding",
      "margin",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "shadow",
    ];
  }

  attributeChangedCallback(rawName, oldVal, newVal) {
    const name = rawName.toLowerCase();
    this[`_${name}`] = newVal !== null ? newVal : this[`_${name}`];
    this.render();
    console.log(rawName, oldVal, newVal);
  }

  render() {
    this.shadowRoot.innerHTML = `
 <style>
   :host {
     display: inline-block;
     max-width: ${this._maxWidth};
     min-width: ${this._minWidth};
     height: ${this._height};
     padding: ${this._padding};
     margin: ${this._margin};
     position: ${this._position};
     top: ${this._top};
     right: ${this._right};
     bottom: ${this._bottom};
     left: ${this._left};
     overflow: hidden;
      }
   }
 </style>
 <slot></slot>
`;
  }
}

customElements.define("marketplace-listings", Marketplace_Listings);