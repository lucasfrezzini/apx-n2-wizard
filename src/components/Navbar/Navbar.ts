class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;
        width: 100%;
        height: 6rem;
        background-color: var(--color-orange);
      }
      span {
        font-weight: bold;
        font-size: 1.8rem
      }
    </style>
    <div><span>Header</span></div>
    `;
  }
}

customElements.define("navbar-element", Navbar);
