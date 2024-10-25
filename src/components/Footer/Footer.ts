class FooterEl extends HTMLElement {
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
        margin-top: 4rem;
        width: 100%;
        height: 23rem;
        background-color: var(--color-pink);
      }
      span {
        font-weight: bold;
        font-size: 1.8rem
      }
    </style>
    <div><span>Footer</span></div>
    `;
  }
}

customElements.define("footer-element", FooterEl);
