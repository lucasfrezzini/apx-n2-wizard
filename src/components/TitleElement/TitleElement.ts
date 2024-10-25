class TitleElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // evaluo que tamaño y renderizo
    if (!this.hasAttribute("data-size")) {
      this.shadowRoot!.innerHTML = `
      <style>
        slot {
          display: block;
          font-size: 1.8rem;
          margin-top: 2rem;
        }
      </style>
      <slot></slot>`;
    } else if (this.getAttribute("data-size") == "subtitle") {
      this.shadowRoot!.innerHTML = `
      <style>
        slot {
          display:block;
          font-size: 3.8rem;
          font-weight: bold;
          margin-top:3rem;
        }
      </style>
      <slot></slot>
      `;
    } else if (this.getAttribute("data-size") == "large") {
      this.shadowRoot!.innerHTML = `
      <style>
        slot {
          display: block;
          font-weight: bold;
          margin-top:3rem;
          font-size: 2.2rem;
        }
      </style>
      <slot></slot>
      `;
    } else if (this.getAttribute("data-size") == "big") {
      this.shadowRoot!.innerHTML = `
      <style>
        slot {
          display: block;
          font-size: 5.2rem;
          font-weight: bold;
        }
      </style>
      <slot></slot>
      `;
    }
  }
}

customElements.define("title-element", TitleElement);
